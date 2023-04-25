import createUser from './controllers/auth/createUser';
import getCurrentUser from './controllers/auth/getUserStatus';
import signIn from './controllers/auth/signIn';
import signOut from './controllers/auth/signOut';
import updatePassword from './controllers/auth/updatePassword';

import getAllData from './controllers/db/getAllData';
import getDataByRef from './controllers/db/getDataByRef';
import postDataByRef from './controllers/db/postDataByRef';
import updateDataByRef from './controllers/db/updateDataByRef';
import removeDataByRef from './controllers/db/removeDataByRef';

export default (app) => {
  const funx = {
    // Auth
    createUser,
    signIn,
    signOut,
    getCurrentUser,
    updatePassword,

    //  Data
    getAllData,
    getDataByRef,
    postDataByRef,
    updateDataByRef,
    removeDataByRef,
  };

  const keys = Object.keys(funx);
  for (const key of keys) funx[key] = funx[key](app);

  class Reduser {
    constructor() {
      this.app = app;
      this.db = app.database();
    }

    // Auth

    createUser = funx.createUser;

    signIn = funx.signIn;

    signOut = funx.signOut;

    getCurrentUser = funx.getCurrentUser;

    updatePassword = funx.updatePassword;

    //  Data

    getAllData = funx.getAllData;

    getDataByRef = funx.getDataByRef;

    postDataByRef = funx.postDataByRef;

    updateDataByRef = funx.updateDataByRef;

    removeDataByRef = funx.removeDataByRef;
  }

  const reducer = new Reduser();

  return { reducer, funx };
};
