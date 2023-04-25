import { useState } from 'react';

import { Button as StandartButton } from 'components/commonComponents/button/button';
import { addUserCourse, getUserCoursesData } from 'mocks';

import Styled from './styledComponents';
import localData from './localData';

export default ({ data }) => {
  const { course, userData } = data;
  const engCourseName = course;
  const userID = userData.localId;

  const pageData = localData.Page[course];
  const titleData = localData.Title[course];
  const { rusCourseName } = pageData;
  const { bgSrc } = titleData;

  const [addingState, setAddingState] = useState(false);

  if (userID)
    if (!addingState)
      getUserCoursesData(
        (data) => {
          for (const engName of Object.keys(data))
            if (engName === engCourseName) setAddingState(true);
        },
        { userID }
      );

  const { Title } = Styled;
  const { Content } = Title;
  const { Box } = Title;
  const buttonName = {
    disable: 'Требуется авторизация',
    enable: addingState
      ? `Курс «${rusCourseName}» добавлен`
      : `Добавить курс «${rusCourseName}»`,
  };
  return (
    <Box
      style={{
        width: '100%',
        height: '300px',
        activity: false,
        bgColor: '#F5F5F5',
        src: bgSrc,
      }}
    >
      <h1>{rusCourseName}</h1>
      <Content>
        <Button
          onClick={() =>
            addUserCourse(() => setAddingState(true), {
              userID,
              courseName: engCourseName,
            })
          }
          disabled={!userID || addingState}
        >
          {buttonName[userID ? 'enable' : 'disable']}
        </Button>
      </Content>
    </Box>
  );
};

const Button = ({ onClick, disabled, children }) => (
  <StandartButton.s18.blue
    onClick={onClick}
    disabled={disabled}
    width="max-content"
    height="max-content"
  >
    {children}
  </StandartButton.s18.blue>
);
