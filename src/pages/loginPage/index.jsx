import { useEffect } from 'react';
import Login from '../../components/loginComp/Login';

export default function LoginPage() {
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      wrapper.style = 'background-color: #F5F5F5';
    }
  });
  return <Login  />;
}
