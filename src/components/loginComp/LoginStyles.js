/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const CenterBlock = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginMainBlock = styled.div`
  // height: 439px;
  width: 366px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const groupLogoImg = styled.div`
  background: transparent;
  margin-top: 40px;
`;

export const LoginInputsBlock = styled.div`
  margin-top: ${({ $typeBlock }) => ($typeBlock === 'login' ? '14px' : '0px')};
  display: inherit;
  align-items: center;
  flex-direction: inherit;
`;

export const LoginChangeBlock = styled.div`
  margin-top: 37px;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  margin-top: 20px;
  height: 40px;
  width: 278px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  border: none;
  color: #000000;
  border-bottom: 1px solid #d0cece;
  &::placeholder {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #d0cece;
  }
`;

export const ErrorArea = styled.div`
  margin-top: 10px;
  //height: 40px;
  width: 278px;
`;

export const changeLabel = styled.label`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
`;

export const ErrorSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #f54021;
`;

export const groupButtonLogIn = styled.div`
  width: 278px;
  height: 52px;
  margin-top: 40px;
`;

export const groupButtonGetSignUp = styled.div`
  width: 278px;
  height: 52px;

  margin-bottom: 47px;
  ${({ $signUp, $changeGroup }) => {
    if ($signUp && !$changeGroup) {
      return css`
        margin-top: 60px;
      `;
    }
    if (!$signUp && $changeGroup) {
      return css`
        margin-top: 50px;
      `;
    }
    return css`
      margin-top: 20px;
    `;
  }}
`;

export const ErrorUserNotExist = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;
