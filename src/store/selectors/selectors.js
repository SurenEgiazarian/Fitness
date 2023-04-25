/* eslint-disable implicit-arrow-linebreak */
import { createSelector } from '@reduxjs/toolkit';
import { skyFitnessQueryApiAuth } from '../../pages/services/queryApi';

const skyFitnessSelector = (store) => store.skyFitnessRedux;
const skyFitnessApiSelector = (store) => store.skyFitness;

const apiSelectorUserSignUp =
  skyFitnessQueryApiAuth.endpoints.postSignUp.select();

const apiSelectorUserLogIn =
  skyFitnessQueryApiAuth.endpoints.postSignInWithPassword.select();

// export const getThingForId = (state, id) => api.endpoints.getThingById.select(id)(state)?.data ?? {};

export const loginDataErrorMSGSelector = (store) =>
  skyFitnessSelector(store)?.errorMessage ?? {};

export const signUpSelector = createSelector(
  apiSelectorUserSignUp,
  (signUpResult) => signUpResult?.data ?? []
);
export const logInSelector = createSelector(
  apiSelectorUserLogIn,
  (logInResult) => logInResult.data ?? []
);

export const loginDataSelector = (store) =>
  skyFitnessSelector(store)?.loginData ??
  JSON.parse(sessionStorage.getItem('skyFitnessLoginData')) ??
  {};
export const userNameDataSelector = (store) => {
  const storeName = skyFitnessSelector(store)?.userName;
  const storageLoginData = sessionStorage.getItem('skyFitnessLoginData');
  const storageName = (
    storageLoginData
      ? JSON.parse(sessionStorage.getItem('skyFitnessLoginData'))
      : undefined
  )?.displayName;
  const combinedName =
    // eslint-disable-next-line no-nested-ternary
    (storeName === '' ? 'не задано' : storeName) ??
    (storageName === '' ? 'не задано' : storageName) ??
    'не задано';
  return combinedName;
};

export const userLogInSelector = (store) =>
  skyFitnessSelector(store)?.userLogIn ??
  Object.keys(JSON.parse(sessionStorage.getItem('skyFitnessLoginData')) ?? {})
    .length > 0 ??
  false;

export const loginDataApiSelector = (store) =>
  skyFitnessApiSelector(store)?.queries || {};
