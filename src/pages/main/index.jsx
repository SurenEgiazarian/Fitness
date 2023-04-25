/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */

import { useNavigate } from 'react-router-dom';
import LogInUserView from 'components/commonComponents/login/logInUserview';
import * as S from './indexStyle';
import * as Comp from '../../components/main/mainPage';
import Logo from '../../components/logo/Logo';
import { Button } from '../../components/commonComponents/button/button';
import { CourseCard } from '../../components/commonComponents/courseCard/courseCard';

export default function Main() {
  const navigate = useNavigate();
  const HendleClickCours = (srcPage) => navigate(`/description/${srcPage}`);
  // const HandleClickUp = ()=> {scroll(0,0);}
  return (
    <S.mainWrapper>
      <S.groupLogo>
        <Logo color="white" />
        <S.groupBtn>
          <LogInUserView />
        </S.groupBtn>
      </S.groupLogo>
      <S.groupBigHeader>
        <S.groupHeaders>
          <Comp.DescCommon />
          <Comp.MainHeader />
        </S.groupHeaders>
        <Comp.Sticker />
      </S.groupBigHeader>
      <S.groupTrainingCards>
        <CourseCard
          title="Йога"
          src="/img/SVG_for_Course_Cards/yoga.png"
          onClick={() => HendleClickCours('yoga')}
        />
        <CourseCard
          title="Стретчинг"
          src="/img/SVG_for_Course_Cards/stretching.png"
          onClick={() => HendleClickCours('stretching')}
        />
        <CourseCard
          title="Танцевальный фитнес"
          src="/img/SVG_for_Course_Cards/dance-fitness.png"
          onClick={() => HendleClickCours('dance-fitness')}
        />
        <CourseCard
          title="Степ-аэробика"
          src="/img/SVG_for_Course_Cards/step-aerobics.png"
          onClick={() => HendleClickCours('step-aerobics')}
        />
        <CourseCard
          title="Бодифлекс"
          src="/img/SVG_for_Course_Cards/bodyflex.png"
          onClick={() => HendleClickCours('bodyflex')}
        />
      </S.groupTrainingCards>
      <S.groupBtnRedirect>
        <Button.s24.green onClick={() => scroll(0, 0)} width="147px">
          Перейти ↑
        </Button.s24.green>
      </S.groupBtnRedirect>
    </S.mainWrapper>
  );
}
