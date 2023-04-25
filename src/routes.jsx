import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userLogInSelector } from 'store/selectors/selectors';
import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';

import Exercise from 'pages/exercise';
import Main from 'pages/main';
import LoginPage from 'pages/loginPage';
import Profile from 'pages/profile';
import Description from 'pages/description';

export default function AppRoutes() {
  const isLogin = useSelector(userLogInSelector);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/description/*" element={<Description />} />
      
      <Route element={<ProtectedRoute isAllowed={isLogin} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/exercise" element={<Exercise />} />
      </Route>
    </Routes>
  );
}
