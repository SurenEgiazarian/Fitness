import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes';

function App() {
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    const wrapper = ref.current;
    const urlPath = new URL(document.URL).pathname;
    const wrapperColor = urlPath === '/' ? '#271a58' : '#ffffff';
    if (wrapper) wrapper.style = `background-color:${wrapperColor}`;
  }, [location]); // добавил для фона Nikita

  return (
    <div className="wrapper" ref={ref}>
      <div className="content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
