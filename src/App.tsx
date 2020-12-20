import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './sytles/global';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
