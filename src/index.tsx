import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid'; // only for container structure: size is defined in theme
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from 'routes';
import { client } from 'services/apollo-config';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GridThemeProvider gridTheme={theme.grid}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </GridThemeProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
