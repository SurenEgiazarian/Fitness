import { actionDataHandler, errorDataHandler } from './handlers';

export default (app) =>
  (responseFunc, { email, password }) =>
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => responseFunc(actionDataHandler(response)))
      .catch((response) => responseFunc(errorDataHandler(response)));
