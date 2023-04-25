const actionDataHandler = (data) => {
  const {
    // operationType,
    user,
  } = data;

  return {
    // operationType,
    user: userDataHandler(user),
    // data
  };
};

const userDataHandler = (data) => {
  const { email, stsTokenManager, uid } = data._delegate;
  const { accessToken, refreshToken } = stsTokenManager;

  const credentials = { email };
  const tokenData = { accessToken, refreshToken };

  return { uid, tokenData, credentials };
};

const errorDataHandler = (data) => {
  const error = data.code;
  return {
    error,
    // data
  };
};

export { actionDataHandler, userDataHandler, errorDataHandler };
