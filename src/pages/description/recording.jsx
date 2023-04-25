import { useState } from 'react';

import { Button as StandartButton } from 'components/commonComponents/button/button';

import Styled from './styledComponents';
import localData from './localData';

export default ({ data }) => {
  const { course, userData } = data;
  const userID = userData.localId;

  const pageData = localData.Page[course];
  const { rusCourseName } = pageData;

  const [recordState, setRecordState] = useState(false);

  const { Recording } = Styled;
  const { Content } = Recording;
  const { Box } = Recording;
  const buttonName = {
    disable: 'Для записи на урок требуется авторизация',
    enable: recordState
      ? `Отменить запись на тренировку по «${rusCourseName}»`
      : `Записаться на тренировку по «${rusCourseName}»`,
  };
  return (
    <Box
      style={{
        src: '/img/pages/description/Signup.png',
        width: '100%',
        height: '300px',
        activity: false,
        bgColor: '#F9EBFF',
      }}
    >
      <Content>
        <p>{msg}</p>
        <Button
          onClick={() => setRecordState(!recordState)}
          recordState={recordState}
          disabled={!userID}
        >
          {buttonName[userID ? 'enable' : 'disable']}
        </Button>
      </Content>
    </Box>
  );
};

const Button = ({ onClick, recordState, disabled, children }) => {
  const Btn = StandartButton.s18[recordState ? 'white' : 'blue'];
  return (
    <Btn
      onClick={onClick}
      disabled={disabled}
      width="max-content"
      height="max-content"
    >
      {children}
    </Btn>
  );
};

const msg =
  'Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!';
