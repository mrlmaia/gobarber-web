import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
// import SignUp from './pages/SignUp';
import Routes from './routes';
import AppProvider from './hooks';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
