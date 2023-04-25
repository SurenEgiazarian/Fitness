import { dbDataHandler, errorDataHandler } from './handlers';

export default () =>
  (responseFunc, { ref }) => {
    getDataByRef(deleteObj, { ref });

    function deleteObj(response) {
      ref
        .remove()
        .then(() => responseFunc(response))
        .catch(() => responseFunc(response));
    }
  };

const getDataByRef = (responseFunc, { ref }) => {
  const newRef = ref.parent;
  // const newRef = ref;
  newRef
    .once('value')
    .then((response) => responseFunc(dbDataHandler({ response, ref: newRef })))
    .catch((response) => responseFunc(errorDataHandler(response)));
};
