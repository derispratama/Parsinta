import React from 'react';
import { useRecoilState } from 'recoil';
import Router from './router';
import { theme } from './store';
function App() {

  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const defaultTheme = currentTheme == 'dark' ? 'bg-dark' : 'bg-white';
  return (
    <div>
      theme {currentTheme}
      <Router />
    </div>
  )
}

export default App;