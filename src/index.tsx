import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid'; // only for container structure: size is defined in theme

import Routes from 'routes';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GridThemeProvider gridTheme={theme.grid}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </GridThemeProvider>
  </ThemeProvider>
);

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
