import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'store';
import theme from 'styles/theme';

interface IOptions extends RenderOptions {}

function renderWithProviders(
  ui: React.ReactElement,
  { ...renderOptions }: IOptions = {}
) {
  function Wrapper({ children }: { children: React.ComponentType }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return rtlRender(ui, {
    wrapper: Wrapper as React.ComponentType,
    ...renderOptions,
  });
}

// re-export everything
export * from '@testing-library/react';

// override render method - render with redux
export { renderWithProviders };
