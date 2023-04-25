import styled from "styled-components";

const Styled = {
  Wrapper: styled("div")`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 75px;

    h1 {
      font-size: 63px;
      font-weight: 300;
      line-height: 40px;
    }

    h2 {
      font-size: 40px;
      font-weight: 400;
      line-height: 48px;
    }

    p {
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
    }
  `,

  Section: styled("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
  `,

  Recommendation: {
    Box: styled("div")`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `,
    Column: styled("div")`
      width: 30%;
      display: grid;
      grid-template-columns: 67px auto;
      gap: 24px;

      padding-left: 10px;
      padding-right: 10px;
    `,
    NumCircle: styled("div")`
      width: 67px;
      height: 67px;

      border-radius: 34px;

      background-color: #c7e957;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 32px;
        font-weight: 400;
        line-height: 40px;
      }
    `,
  },

  CourseList: {
    Box: styled("div")`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `,
    Column: styled("div")`
      width: 30%;
      display: flex;
      flex-direction: row;

      padding-left: 10px;
      padding-right: 10px;

      ul {
        list-style-type: disc;
        list-style-position: inside;
      }
      p {
        word-wrap: normal;
        white-space: nowrap;
      }
    `,
  },
};

export default Styled;
