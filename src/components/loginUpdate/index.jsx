import Logo from 'components/logo/Logo';
import Popover from 'components/popover';
import { Button } from 'components/commonComponents/button/button';
import { useState } from 'react';
import ActionCompleted from 'components/actionCompleted';
import * as S from './styles';
import { InputField } from '../loginComp/LoginStyles'; // TODO: вынести в отдельный компонент

export default function LoginUpdate(props) {
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
      <ActionCompleted msg="Логин обновлён!" />
    </Popover>
  ) : (
    <Popover onClose={onCloseHandler}>
      <Logo />
      <S.ContentWrapper>
        <S.Title>Новый логин:</S.Title>
        <S.FieldsBlock>
          <InputField placeholder="Логин" />
        </S.FieldsBlock>
        <Button.s18.blue width="275px" onClick={onSaveBtnHandler}>
          Сохранить
        </Button.s18.blue>
      </S.ContentWrapper>
    </Popover>
  );
}
