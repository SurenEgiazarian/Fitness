import styled from 'styled-components';

import { FramedBlock } from './styledComponents/framedBlock';

const Styled = {
  Wrapper: styled('div')`
    height: auto;
    width: 100%;
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;

    gap: 75px;
  `,

  Main: styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    gap: 75px;

    font-family: 'StratosSkyeng', sans-serif;
    color: #000000;

    div {
      box-sizing: border-box;
      overflow: hidden;
    }
  `,

  Title: {
    Box: FramedBlock,
    Content: styled('div')`
      flex-grow: 1;

      padding: 10px 10px;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    `,
  },

  Recording: {
    Box: FramedBlock,
    Content: styled('div')`
      flex-grow: 1;

      padding: 10px 10px;

      display: grid;
      grid-template-rows: auto 60px;
      gap: 20px;

      p {
        width: 75%;
        font-size: 32px;
        font-weight: 400;
        line-height: 40px;
        overflow: hidden;
      }
    `,
  },
};

export default Styled;
