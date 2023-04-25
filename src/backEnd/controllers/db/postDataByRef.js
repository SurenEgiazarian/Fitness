import { errorDataHandler } from './handlers';

export default () =>
  (responseFunc, { ref, newData }) => {
    ref
      .push(newData)
      .then((response) => getDataByRef(responseFunc, { ref: response }))
      .catch((response) => responseFunc(response));
  };

const getDataByRef = (responseFunc, { ref }) => {
  //   const newRef = ref.parent;
  const newRef = ref;
  newRef
    .once('value')
    .then((response) => {
      const data = response.val();
      responseFunc({ data, ref: newRef });
    })
    .catch((response) => responseFunc(errorDataHandler(response)));
};
