import { dbDataHandler, errorDataHandler } from './handlers';

export default () =>
  (responseFunc, { ref, newData }) => {
    ref
      .update(newData)
      // .set(newData)
      .then(() => getDataByRef(responseFunc, { ref }))
      .catch((response) => responseFunc(response));
  };

const getDataByRef = (responseFunc, { ref }) => {
  const newRef = ref;
  newRef
    .once('value')
    .then((response) => responseFunc(dbDataHandler({ response, ref: newRef })))
    .catch((response) => responseFunc(errorDataHandler(response)));
};