import { dbDataHandler, errorDataHandler } from './handlers';

export default () =>
  (responseFunc, { ref }) => {
    ref
      .once('value')
      .then((response) => responseFunc(dbDataHandler({ response, ref })))
      .catch((response) => responseFunc(errorDataHandler(response)));
  };
