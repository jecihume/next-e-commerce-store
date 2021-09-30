import head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import GoldenEgg from '../public/titleEgg.jpeg';

export default function Lys() {
  return (
    <Layout>
      <head>
        <title>Lysene Dragon Eggs</title>
      </head>
      <div>Dragon Eggs from the Southern Isles</div>
      {/* this is the version with an image component */}
      <Image src={GoldenEgg} alt="golden dragon egg" />
    </Layout>
  );
}
