import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import titleEgg from '../public/titleEgg.jpeg';
import globalStyles from '../styles/globalStyles';

const navStyles = css`
  display: flex;
  height: 12vh;
  gap: 25px;
  background-color: #281f62;
  color: darkmagenta;
`;

// const icon = css`
//   border-radius: 50%;
//   height: 6px;
//   width: 6px;
// `;

export default function Header() {
  return (
    <header css={navStyles}>
      <nav css={navStyles}>
        {/* <Image src={titleEgg} alt="luminescent dragon egg" css={icon} /> */}

        <h2 className="h2">The Most Precious Dragon Eggs from Essos! </h2>
        <Link href="/" className="link">
          <a>Home</a>
        </Link>
        <Link href="/products" className="link">
          <a>Products</a>
        </Link>
        <Link href="/about" className="link">
          <a>About</a>
        </Link>
        <Link href="/contact" className="link">
          <a>Contact</a>
        </Link>
        <Link href="/cart" className="link">
          <a>Shopping Cart</a>
        </Link>
      </nav>
    </header>
  );
}
