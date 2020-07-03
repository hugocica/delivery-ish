import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Home from 'pages/Home';

import theme from 'styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
