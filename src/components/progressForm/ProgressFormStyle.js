import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 444px;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 36px 41px 44px;
  background: #fff;
  box-sizing: border-box;
`;

export const ContentComplete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 444px;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 41px;
  background: #fff;
  box-sizing: border-box;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 32px;
  line-height: 40px;
  color: #000000;
`;

export const TitleComplete = styled.p`
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #000000;
  max-width: 268px;
  margin-bottom: 12px;
`;

export const ImgComplete = styled.img``;

export const List = styled.form`
  // /*
  // export const List = styled.div
  // */

  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0 40px;
`;

export const Item = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  max-width: 360px;
`;

export const Input = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  :hover,
  :focus {
    appearance: none;
    -moz-appearance: textfield;
  }
  ::placeholder {
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding-bottom: 7px;
  outline: none;
`;

export const ButtonContainer = styled.div`
  align-self: center;
`;
