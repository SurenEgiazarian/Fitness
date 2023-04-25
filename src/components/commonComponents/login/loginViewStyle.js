import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';

export const User = styled.div`
  display: flex;
  height: 50px;
  width: 205px;
  gap: 15px;
  cursor: pointer;
`;

export const UserImg = styled.div`
  background: #d9d9d9;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const UserText = styled.div`
  display: flex;
  width: 140px;
  flex-wrap: nowrap;
  gap: 12px;
  align-items: center;
  position: relative;
`;

export const UserName = styled.p`
  font-size: 24px;
  line-height: 32px;
  text-align: right;
  letter-spacing: -0.1px;
  color: ${({ $isMainPage }) => ($isMainPage ? '#ffffff' : '#000000')};
`;

export const LogOutLink = styled.a`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.1px;
  color: '#000000';
`;

export const UserArrowImg = styled.img`
  height: 8px;
`;
export const GroupLogOut = styled.div``;
export const UserArrowSvg = styled(ArrowIcon)`
  height: 12px;
  width: 12px;
  color: ${({ $isMainPage }) => ($isMainPage ? '#ffffff' : '#000000')};
`;

export const LogOutMenu = styled.div`
  background-color: transparent;
  top: 55px;
  right: 0px;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
