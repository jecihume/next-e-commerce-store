import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout aTitle="Where do our Dragon Eggs come from?">
      <Head>
        <title>Essos Dragon Eggs Home</title>
      </Head>
      <h2 className="h2">Braavos: Dragon Eggs from the Northern Shore</h2>
      <h2 className="h2">Lys: Dragon Eggs from the Southern Isles</h2>
      <h2 className="h2">Qohor: Dragon Eggs from the Eastern Mountains</h2>
    </Layout>
  );
}
