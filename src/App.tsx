import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './sytles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>

    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
