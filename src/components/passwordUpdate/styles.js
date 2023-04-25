import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 278px;
  margin-top: 37px;
  padding-bottom: 48px;
`;

export const Title = styled.div`
  font-size: 18px;
  line-height: 24px;
  height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;

export const FieldsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18;
  margin-bottom: 50px;
`;
