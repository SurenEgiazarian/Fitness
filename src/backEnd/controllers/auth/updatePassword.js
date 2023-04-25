// import { userDataHandler } from './handlers';

export default (app) =>
  (responseFunc, { password }) => {
    responseFunc(app.auth().currentUser.updatePassword(password));
  };
