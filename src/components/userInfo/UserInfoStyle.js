import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 220px;
  height: 35px;
`;

export const LogoImg = styled.img``;

export const User = styled.div`
  display: flex;
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
  gap: 12px;
  align-items: center;
`;

export const UserName = styled.p`
  font-size: 24px;
  line-height: 32px;
  text-align: right;
  letter-spacing: -0.1px;
  color: #000000;
`;

export const UserArrow = styled.div``;

export const UserArrowImg = styled.img`
  height: 8px;
`;
