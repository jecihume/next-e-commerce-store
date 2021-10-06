import { css } from '@emotion/react';

const navStyles = css`
  display: flex;
  gap: 15px;
  background-color: lightseagreen;
  color: darkmagenta;
`;

export default function Footer() {
  return <footer css={navStyles}>EssosDragonEggs.com</footer>;
}
