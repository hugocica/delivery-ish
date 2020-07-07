import React from 'react';
import 'jest-styled-components';

import { renderWithTheme, render } from 'testUtils';

import Button from '.';

describe('Button component', () => {
  it('it should render child', () => {
    const { getByText } = renderWithTheme(<Button>click me</Button>);

    expect(getByText('click me')).toBeDefined();
  });
  describe('Background color', () => {
    it("should have #EBEBEB background when it's disabled", () => {
      const { getByRole } = renderWithTheme(<Button disabled>Click me</Button>);
      expect(getByRole('button')).toHaveStyleRule(
        'background-color',
        '#EBEBEB'
      );
    });
    it("should have white background when it's outlined", () => {
      const { getByRole } = renderWithTheme(<Button outlined>click me</Button>);
      expect(getByRole('button')).toHaveStyleRule('background-color', '#fff');
    });
    it("should have #FFC500 background when it's color property is primary", () => {
      const { getByRole } = renderWithTheme(
        <Button color="primary">click me</Button>
      );
      expect(getByRole('button')).toHaveStyleRule(
        'background-color',
        '#FFC500'
      );
    });
  });
});
