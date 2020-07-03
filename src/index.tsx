import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';
import theme from 'styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
