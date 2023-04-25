import { dbDataHandler, errorDataHandler } from './handlers';

export default (app) =>
  (responseFunc, requestData = { collection: null, path: null }) => {
    const { collection, path } = requestData;

    const urlCollection = collection || 'courses';
    const urlPath = path ? `${path}` : '';
    const url = urlCollection + urlPath;

    const db = app.database();
    const ref = db.ref(url);
    ref
      .once('value')
      .then((response) => responseFunc(dbDataHandler({ response, ref })))
      .catch((response) => responseFunc(errorDataHandler(response)));
  };
