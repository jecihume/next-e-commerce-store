import { css } from '@emotion/react';

const navStyles = css`
  display: flex;
  height: 4vh;
  gap: 25px;
  background-color: #281f62;
  color: darkmagenta;
`;

export default function Footer() {
  return (
    <footer css={navStyles}>
      PreciousEssosDragonEggs.com {new Date().getFullYear()}
    </footer>
  );
}

function sum(a, b) {
  return a + b;
}
