import styled from "styled-components";

export const Container = styled.div`
  width: 638px;
  background: #f2f2f2;
  border-radius: 30px;
  padding: 36px 55px 32px 44px;
  box-sizing: border-box;
`;

export const Title = styled.p`
  font-size: 32px;
  line-height: 40px;
  color: #000000;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-top: 41px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemText = styled.p`
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  max-width: 227px;
`;

export const ItemProgress = styled.div`
  width: 278px;
  height: 36px;
  border-radius: 22px;
  overflow: hidden;
`;

export const ItemProgressFill = styled.div`
  height: 100%;
  border-radius: 22px 0 0 22px;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  display: flex;
  align-items: center;
`;
