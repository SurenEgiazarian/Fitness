import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 444px;
  max-height: 626px;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 36px 41px 0;
  background: #fff;
  box-sizing: border-box;
`;

export const PopoverCloseBtn = styled.div`
  width: 26px;
  height: 26px;
  position: absolute;
  background-image: url('/img/x-solid.svg');
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 1000;
`;
