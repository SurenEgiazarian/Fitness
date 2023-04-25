import Logo from 'components/logo/Logo';
import Popover from 'components/popover';
import ActionCompleted from 'components/actionCompleted';
import { Button } from 'components/commonComponents/button/button';
import { useState } from 'react';
import * as S from './styles';
import { InputField } from '../loginComp/LoginStyles';

export default function PasswordUpdate(props) {
  const [isActionCompleted, setIsActionCompeleted] = useState(false);
  const { onCloseHandler } = props;

  const onSaveBtnHandler = () => {
    setIsActionCompeleted(true);
    setTimeout(() => {
      onCloseHandler();
    }, 700);
  };

  return isActionCompleted ? (
    <Popover closeBtnRequired={false}>
      <ActionCompleted msg="Пароль изменён!" />
    </Popover>
  ) : (
    <Popover onClose={onCloseHandler}>
      <Logo />
      <S.ContentWrapper>
        <S.Title>Новый пароль:</S.Title>
        <S.FieldsBlock>
          {' '}
          <InputField placeholder="Пароль" />
          <InputField placeholder="Повторите пароль" />
        </S.FieldsBlock>
        <Button.s18.blue width="275px" onClick={onSaveBtnHandler}>
          Сохранить
        </Button.s18.blue>
      </S.ContentWrapper>
    </Popover>
  );
}
