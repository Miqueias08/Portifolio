import React, { useEffect } from 'react';

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './styles/components/app.sass';

function App() {
  useEffect(() => {
    document.title = 'Miquéias Fernando Almeida de Jesus';
  }, []);

  return (
    <div id="portifolio">
      <h1>Miquéias Fernando .A .J</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
