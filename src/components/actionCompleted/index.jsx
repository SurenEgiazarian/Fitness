import * as S from './styles';

export default function ActionCompleted({ msg }) {
  return (
    <S.Content>
      <S.Title>{msg}</S.Title>
      <img src="../../img/complete.svg" alt="complete-icon" />
    </S.Content>
  );
}
