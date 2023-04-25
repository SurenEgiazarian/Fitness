import { userDataHandler } from './handlers';

export default (app) => (responseFunc) => {
  const data = app.auth().currentUser;
  const user = data ? userDataHandler(data) : data;
  const response = {
    user,
  };

  responseFunc(response);
};
