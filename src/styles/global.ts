import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    overflow-x: hidden;
  }
  body {
    scroll-behavior: smooth;

  }
  html, body {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    background-color: ${({ theme }) => theme.colors.gray1};
    overflow: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
  }

  .main-content {
    background-color: ${({ theme }) => theme.colors.gray1};
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    flex-direction: column;
  }

  &::-webkit-scrollbar {
    height: 7px;
    width: 7px;
    background-color: ${({ theme }) => theme.colors.gray2};
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.gray4};
  }

  .with-custom-scroll {
    &::-webkit-scrollbar {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.gray2};
    }
  }
`;
