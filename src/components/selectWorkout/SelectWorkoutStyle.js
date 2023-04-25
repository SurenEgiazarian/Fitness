import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 444px;
  max-height: 626px;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 36px 41px 58px;
  background: #fff;
  box-sizing: border-box;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 32px;
  line-height: 40px;
  color: #000000;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
  padding: 0 24px;
  overflow: auto;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: relative;
  border: 1px solid #000000;
  border-radius: 26px;
  padding: 12px 29px 17px;
  cursor: pointer;
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #000000;
`;

export const ItemTitle = styled.p`
  font-size: 20px;
  line-height: 115%;
  letter-spacing: -0.05px;
  max-width: 188px;
  text-align: center;
`;

export const ItemDesc = styled.p`
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.001em;
`;

export const ItemComplete = styled.img`
  position: absolute;
  right: 12px;
  top: 12px;
`;
