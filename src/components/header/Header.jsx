import { useNavigate } from 'react-router-dom';
import LogInUserView from 'components/commonComponents/login/logInUserview';
import * as s from './HeaderStyle';

export default function Header() {
  const navigate = useNavigate();

  return (
    <s.Content>
      <s.Logo>
        <s.LogoImg src="/img/logo-black.svg" onClick={() => navigate('/')} />
      </s.Logo>
      <LogInUserView />
    </s.Content>
  );
}
