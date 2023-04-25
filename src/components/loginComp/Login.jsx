/* eslint-disable consistent-return */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, redirect } from 'react-router-dom';
import {
  usePostSignInWithPasswordQuery,
  usePostSignUpQuery,
  usePostUpdatePasswordQuery,
  usePostUpdateUserInfoQuery,
  usePostRefreshToIdTokenQuery,
} from '../../pages/services/queryApi';
import { Button } from '../commonComponents/button/button';
import * as S from './LoginStyles';
import Logo from '../logo/Logo';
import {
  loginDataErrorMSGSelector,
  loginDataSelector,
} from '../../store/selectors/selectors';
import {
  FetchSignUpPassNotEqual,
  FetchLoginSuccess,
  FetchLoginFailure,
  FetchUpdateName,
  FetchUpdateToken,
} from '../../store/actions/creators/creators';

const InputFields = [
  {
    name: 'login',
    placeholder: 'Логин(email)',
    key: '1',
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Пароль',
    key: '2',
    type: 'password',
  },
  {
    name: 'ReturnPassword',
    placeholder: 'Повторите пароль',
    key: '3',
    type: 'password',
  },
];
const InputFieldsChangePassword = [
  {
    name: 'password',
    placeholder: 'Пароль',
    key: '1',
    type: 'password',
  },
  {
    name: 'ReturnPassword',
    placeholder: 'Повторите пароль',
    key: '2',
    type: 'password',
  },
];
const InputFieldsChangeLoginName = [
  {
    name: 'nameUser',
    placeholder: 'Имя пользователя',
    key: '1',
    type: 'text',
  },
];
function Login({ type = 'login', close }) {
  return (
    <S.CenterBlock>
      <S.LoginMainBlock>
        <S.groupLogoImg>
          <Logo />
        </S.groupLogoImg>
        <LoginBlock typeBlock={type} close={close} />
      </S.LoginMainBlock>
    </S.CenterBlock>
  );
}

export default Login;
export function LoginBlock({ typeBlock, close }) {
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorMessage = useSelector(loginDataErrorMSGSelector);
  const loginDataSelected = useSelector(loginDataSelector);
  const [skipSignUp, setSkipSignUp] = useState(true);
  const [skipLogIn, setSkipLogIn] = useState(true);
  const [skipChangePassword, setSkipChangePassword] = useState(true);
  const [skipChangeUserName, setSkipChangeUserName] = useState(true);
  const [logInfo, setLogInfo] = useState(null);
  const loginStates = {
    states: {
      signUp,
    },
    funcStates: {
      setSkipSignUp,
      setSkipLogIn,
      setSignUp,
      setSkipChangePassword,
      setSkipChangeUserName,
    },
  };
  const {
    data: dataRefToken,
    error: errorRefToken,
    isLoading: isLoadingRefToken,
  } = usePostRefreshToIdTokenQuery(
    { refreshToken: loginDataSelected?.refreshToken },
    {
      skip: typeBlock === 'login',
      refetchOnMountOrArgChange: true,
    }
  );
  const {
    data: dataSignUp,
    error: errorSignUp,
    isLoading: isLoadingSignUp,
  } = usePostSignUpQuery(
    {
      email: logInfo?.login,
      password: logInfo?.password,
    },
    { skip: skipSignUp }
  );
  const {
    data: dataLogIn,
    error: errorLogIn,
    isLoading: isLoadingLogIn,
  } = usePostSignInWithPasswordQuery(
    {
      email: logInfo?.login,
      password: logInfo?.password,
    },
    { skip: skipLogIn }
  );
  const {
    data: dataNewPassword,
    error: errorNewPassword,
    isLoading: isLoadingNewPassword,
  } = usePostUpdatePasswordQuery(
    {
      idToken: loginDataSelected.idToken ?? '',
      newPassword: logInfo?.password,
    },
    { skip: skipChangePassword }
  );
  const {
    data: dataUpdateUserInfo,
    error: errorUpdateUserInfo,
    isLoading: isLoadingUpdateUserInfo,
  } = usePostUpdateUserInfoQuery(
    {
      idToken: loginDataSelected.idToken ?? '',
      newUserName: logInfo?.nameUser,
    },
    { skip: skipChangeUserName }
  );
  console.log(dataUpdateUserInfo);
  const isLoading =
    isLoadingSignUp ||
    isLoadingLogIn ||
    isLoadingNewPassword ||
    isLoadingUpdateUserInfo;
  useEffect(() => {
    dispatch(FetchLoginFailure({}));
  }, []);
  useEffect(() => {
    let errorMessageStore = {};
    if (errorSignUp) {
      errorMessageStore = { Error: errorSignUp.data.error.message };
      dispatch(FetchLoginFailure(errorMessageStore));
    } else if (errorLogIn) {
      errorMessageStore = { Error: errorLogIn.data.error.message };
      dispatch(FetchLoginFailure(errorMessageStore));
    } else if (errorNewPassword) {
      errorMessageStore = { Error: errorNewPassword.data.error.message };
      dispatch(FetchLoginFailure(errorMessageStore));
    } else if (errorUpdateUserInfo) {
      errorMessageStore = { Error: errorUpdateUserInfo.data.error.message };
      dispatch(FetchLoginFailure(errorMessageStore));
    } else if (errorRefToken) {
      errorMessageStore = { Error: errorRefToken.data.error.message };
      dispatch(FetchLoginFailure(errorMessageStore));
    }
  }, [
    errorLogIn,
    errorSignUp,
    errorNewPassword,
    errorUpdateUserInfo,
    errorRefToken,
  ]);

  const writeLoginDataStorage = (data) =>
    sessionStorage.setItem('skyFitnessLoginData', JSON.stringify(data));
  useEffect(() => {
    if (dataLogIn) {
      dispatch(FetchLoginSuccess(dataLogIn));
      writeLoginDataStorage(dataLogIn);
      navigate('/');
    } else if (dataSignUp) {
      dispatch(FetchLoginSuccess(dataSignUp));
      writeLoginDataStorage(dataSignUp);
      navigate('/');
    } else if (dataNewPassword) {
      close();
    } else if (dataUpdateUserInfo) {
      const loginDataStorage = JSON.parse(
        sessionStorage.getItem('skyFitnessLoginData')
      );
      loginDataStorage.displayName = dataUpdateUserInfo.displayName;
      sessionStorage.setItem(
        'skyFitnessLoginData',
        JSON.stringify(loginDataStorage)
      );
      dispatch(FetchUpdateName({ ...dataUpdateUserInfo }));
      close();
    } else if (dataRefToken) {
      const loginDataStorage = JSON.parse(
        sessionStorage.getItem('skyFitnessLoginData')
      );
      loginDataStorage.refreshToken = dataRefToken.refresh_token;
      loginDataStorage.idToken = dataRefToken.access_token;
      loginDataStorage.expiresIn = dataRefToken.expires_in;
      sessionStorage.setItem(
        'skyFitnessLoginData',
        JSON.stringify(loginDataStorage)
      );
      dispatch(FetchUpdateToken({ ...dataRefToken }));
    }
    dispatch(FetchLoginFailure({}));
  }, [
    dataLogIn,
    dataSignUp,
    dataUpdateUserInfo,
    dataNewPassword,
    dataRefToken,
  ]);
  const GetListFields = () => {
    let typeListFields;
    if (typeBlock === 'login') {
      typeListFields = InputFields;
    } else if (typeBlock === 'changePassword') {
      typeListFields = InputFieldsChangePassword;
    } else if (typeBlock === 'changeLoginName') {
      typeListFields = InputFieldsChangeLoginName;
    }
    return typeListFields;
  };
  return (
    <S.LoginChangeBlock>
      {typeBlock === 'changePassword' && (
        <S.changeLabel>Новый пароль:</S.changeLabel>
      )}
      {typeBlock === 'changeLoginName' && (
        <S.changeLabel>Новый имя пользователя:</S.changeLabel>
      )}
      <S.LoginInputsBlock>
        <LoginMenu
          typeBlock={typeBlock}
          isLoading={isLoading}
          list={GetListFields()}
          count={signUp ? 3 : 2}
          loginStates={loginStates}
        />
        {Object.keys(errorMessage).length > 0 && (
          <S.ErrorArea>
            <ShowErrors errorMessage={errorMessage} />
          </S.ErrorArea>
        )}
        {!signUp && typeBlock === 'login' && (
          <ButtonLogIn
            isLoading={isLoading}
            loginStates={loginStates.states}
            loginFunc={loginStates.funcStates}
            dispatch={dispatch}
            setLogInfo={setLogInfo}
          />
        )}
        {typeBlock === 'login' && (
          <ButtonGetSignUp
            signUp={signUp}
            isLoading={isLoading}
            dispatch={dispatch}
            loginStates={loginStates.states}
            loginFunc={loginStates.funcStates}
            setLogInfo={setLogInfo}
          />
        )}
        {typeBlock === 'changePassword' && (
          <ButtonChangePassword
            isLoading={isLoading}
            dispatch={dispatch}
            loginStates={loginStates.states}
            loginFunc={loginStates.funcStates}
            setLogInfo={setLogInfo}
          />
        )}
        {typeBlock === 'changeLoginName' && (
          <ButtonChangeUserName
            isLoading={isLoading}
            dispatch={dispatch}
            loginStates={loginStates.states}
            loginFunc={loginStates.funcStates}
            setLogInfo={setLogInfo}
          />
        )}
      </S.LoginInputsBlock>
    </S.LoginChangeBlock>
  );
}
function ShowErrors({ errorMessage }) {
  let keys = Object.keys(errorMessage);
  keys = keys.map((errorMessageKey, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <S.ErrorSpan key={key}>{errorMessage[errorMessageKey]}</S.ErrorSpan>
  ));
  return keys;
}
const LoginMenu = ({ list, count, isLoading, typeBlock }) => {
  const content = [];
  list.forEach((inputElem, index) => {
    if (index < count) {
      content.push(
        <S.InputField
          $typeBlock={typeBlock}
          type={inputElem.type}
          disabled={isLoading}
          id={inputElem.key}
          name={inputElem.name}
          placeholder={inputElem.placeholder}
          key={inputElem.key}
        />
      );
    }
  });
  return content;
};

function GetLogParams(stateParams) {
  const objParams = {};
  // eslint-disable-next-line no-plusplus
  for (let index = 1; index < 4; index++) {
    const element = document.getElementById(String(index));
    if (element) {
      objParams[element.name] = element.value;
    }
  }
  stateParams(objParams);
}
const CheckPassword = (dispatch) => {
  const pass = document.getElementsByName('password')[0].value;
  const repPass = document.getElementsByName('ReturnPassword')[0].value;
  if (pass !== repPass) {
    dispatch(
      FetchSignUpPassNotEqual({ SignUpPassNotEqual: 'Пароли не совпадают' })
    );
    return false;
  }
  return true;
};
export function ButtonChangePassword({
  isLoading,
  loginFunc,
  setLogInfo,
  dispatch,
}) {
  // eslint-disable-next-line consistent-return
  function handelClickBtnChangePassword() {
    if (!CheckPassword(dispatch)) {
      return;
    }
    GetLogParams(setLogInfo);
    loginFunc.setSkipChangePassword(false);
  }

  return (
    <S.groupButtonGetSignUp $signUp={false} $changeGroup>
      <Button.s18.blue
        width="278px"
        height="52px"
        disabled={isLoading}
        onClick={() => handelClickBtnChangePassword()}
      >
        Сохранить
      </Button.s18.blue>
    </S.groupButtonGetSignUp>
  );
}

export function ButtonChangeUserName({
  isLoading,
  loginFunc,
  setLogInfo,
  dispatch,
}) {
  // eslint-disable-next-line consistent-return
  function handelClickBtnChangeUserName() {
    GetLogParams(setLogInfo);
    loginFunc.setSkipChangeUserName(false);
  }

  return (
    <S.groupButtonGetSignUp $signUp={false} $changeGroup>
      <Button.s18.blue
        width="278px"
        height="52px"
        disabled={isLoading}
        onClick={() => handelClickBtnChangeUserName()}
      >
        Сохранить
      </Button.s18.blue>
    </S.groupButtonGetSignUp>
  );
}

export function ButtonLogIn({ isLoading, loginFunc, setLogInfo }) {
  // eslint-disable-next-line consistent-return
  function handelClickBtnLogin() {
    loginFunc.setSkipSignUp(true);
    GetLogParams(setLogInfo);
    loginFunc.setSkipLogIn(false);
  }

  return (
    <S.groupButtonLogIn>
      <Button.s18.blue
        width="278px"
        height="52px"
        disabled={isLoading}
        onClick={() => handelClickBtnLogin()}
      >
        Войти
      </Button.s18.blue>
    </S.groupButtonLogIn>
  );
}

function ButtonGetSignUp({
  dispatch,
  loginStates,
  loginFunc,
  isLoading,
  setLogInfo,
}) {
  // const navigate = useNavigate();

  function HandelClickBtnSignUp() {
    // eslint-disable-next-line no-lonely-if
    loginFunc.setSkipLogIn(true);
    if (!loginStates.signUp) {
      loginFunc.setSignUp(true);
      return;
    }
    if (!CheckPassword(dispatch)) {
      return;
    }
    GetLogParams(setLogInfo);
    loginFunc.setSkipSignUp(false);
  }

  return (
    <S.groupButtonGetSignUp $signUp={loginStates.signUp} $changeGroup={false}>
      <Button.s18.white
        disabled={isLoading}
        width="278px"
        height="52px"
        onClick={() => HandelClickBtnSignUp()}
      >
        Зарегистироваться
      </Button.s18.white>
    </S.groupButtonGetSignUp>
  );
}
