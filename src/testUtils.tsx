import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

interface IOptions extends RenderOptions {}

function renderWithTheme(
  ui: React.ReactElement,
  { ...renderOptions }: IOptions = {}
) {
  function Wrapper({ children }: { children: React.ComponentType }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
  return rtlRender(ui, {
    wrapper: Wrapper as React.ComponentType,
    ...renderOptions,
  });
}

// re-export everything
export * from '@testing-library/react';

// override render method - render with redux
export { renderWithTheme };
