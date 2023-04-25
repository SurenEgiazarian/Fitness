import styled from "styled-components";

export const FramedBlock = styled("div")`
  height: ${(props) => props.style.height};
  width: ${(props) => props.style.width};

  padding: 35px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-image: url(${(props) => props.style.src});
  background-color: ${(props) => props.style.bgColor};
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 1160px 100%;

  transition: all 0.5s ease-out;

  h1 {
    font-size: 63px;
    font-weight: 300;
    line-height: 40px;
  }
`;
