import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  padding: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;
`;

export const Text = styled.span`
  display: inline-block;

  color: #000000;
  /* font-family: StratosSkyeng; */
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  del {
    position: relative;
    text-decoration: none;
  }
  del:before {
    content: '';
    width: 100%;
    height: 0.1em;
    background: #db7d76;
    position: absolute;
    top: 50%;
    left: 0;
    transform: rotate(-1deg);
  }
`;

export const EyeButton = styled.button`
  border: transparent;
  background-color: transparent;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }
  transition: all 0.5s ease-out;
  cursor: pointer;

  & span {
    color: #000000;
    /* font-family: StratosSkyeng; */
    font-size: 44px;
    font-weight: 600;
    line-height: 32px;

    del {
      position: relative;
      text-decoration: none;
    }
    del:before {
      content: '';
      width: 100%;
      height: 0.1em;
      background: lightcoral;
      position: absolute;
      top: 50%;
      left: 0;
      transform: rotate(-30deg);
    }
  }
`;
