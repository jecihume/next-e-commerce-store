import head from 'next/head';
import Layout from '../components/Layout';

export default function Braavos() {
  return (
    <Layout>
      <head>
        <title>Braavosi Dragon Eggs</title>
      </head>
      <div>Dragon Eggs from the Northern Shore</div>
      {/* image with normal image tag from public directory */}
      <img src="/titleEgg.jpeg" alt="golden dragon egg" />
    </Layout>
  );
}
