import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  display: flex;
  gap: 5px;
  background-color: lightseagreen;
  color: darkmagenta;
`;

export default function Header() {
  return (
    <header>
      <nav css={navStyles}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/eggs-braavos">
          <a>Braavos</a>
        </Link>
        <Link href="/eggs-lys">
          <a>Lys</a>
        </Link>
        <Link href="/eggs-qohor">
          <a>Qohor</a>
        </Link>
      </nav>
    </header>
  );
}
