import styled from "styled-components";

export const StyledСourseCard = styled("div")`
  height: ${(props) => props.style.height};
  width: ${(props) => props.style.width};
  
  box-sizing: border-box;

  padding: 35px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-image: url(${(props) => props.style.src});
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 100% 100%;

  overflow: hidden;

  &:hover {
    transform: ${(props) =>
      props.style.activity ? "scale(1.05)" : "scale(1)"};
  }
  &:active {
    transform: ${(props) =>
      props.style.activity ? "scale(0.98)" : "scale(1)"};
  }

  transition: all 0.5s ease-out;

  cursor: ${(props) => (props.style.activity ? "pointer" : "default")};

  & h1 {
    color: #000000;
    font-family: "Abhaya Libre ExtraBold";
    font-family: "StratosSkyeng", sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
  }
`;

export const StyledCardContent = styled("div")`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
