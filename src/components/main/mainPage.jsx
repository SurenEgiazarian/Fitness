import * as S from "./mainPageStyle";
import logoSvg from "./img/logo.svg";
import sticker from "./img/Sale_sticker.svg";

export function Logo() {
  // <use xlinkHref={logoSvg} />
  return <S.logo src={logoSvg} />;
}

export function DescCommon() {
  return <S.descCommon>Онлайн-тренировки для занятий дома</S.descCommon>;
}

export function MainHeader() {
  return (
    <S.mainHeader>
      Начните заниматься спортом и улучшите качество жизни
    </S.mainHeader>
  );
}

export function Sticker() {
  // <use xlinkHref={sticker} />
  return <S.sticker src={sticker} />;
}
