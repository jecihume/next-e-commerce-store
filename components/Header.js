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
        <Image src={titleEgg} alt="luminescent dragon egg" className="icon" />

        <h2 className="logo">The Most Precious Dragon Eggs from Essos!</h2>
        <Link href="/" className="navLink">
          <a>Home</a>
        </Link>
        <Link href="/products" className="navLink">
          <a>Products</a>
        </Link>
        <Link href="/about" className="navLink">
          <a>About</a>
        </Link>
        <Link href="/contact" className="navLink">
          <a>Contact</a>
        </Link>
        <Link href="/cart" className="navLink">
          <a>Shopping Cart</a>
        </Link>
      </nav>
    </header>
  );
}
