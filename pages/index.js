import head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout aTitle="this is a test">
      <head>
        <title>Essos Dragon Eggs Home</title>
      </head>
      <div>Braavos: Dragon Eggs from the Northern Shore</div>
      <div>Lys: Dragon Eggs from the Southern Isles</div>
      <div>Qohor: Dragon Eggs from the Eastern Mountains</div>
    </Layout>
  );
}
