import { css, Global } from '@emotion/react';
import { Router } from './router';

let globalStyles = css`
  :root {
    --color-background: #f2f0f9;
    --color-title: #6e6893;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--color-background);
    font-family: 'Inter', sans-serif;
  }

  .ActiveTab {
    color: #25213b !important;
    border-bottom: 2px solid #25213b;
    opacity: 1 !important;
  }
`;

export function App() {
  return (
    <>
      <Router />
      <Global styles={globalStyles} />
    </>
  );
}
