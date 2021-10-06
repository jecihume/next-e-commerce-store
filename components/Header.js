import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import titleEgg from '../public/titleEgg.jpeg';

const navStyles = css`
  display: flex;
  gap: 25px;
  background-color: lightseagreen;
  color: darkmagenta;
`;

export default function Header() {
  return (
    <header>
      <nav css={navStyles}>
        <div>
          <Image src={titleEgg} alt="luminescent dragon egg" />
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  );
}
