import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Essos Dragon Eggs Home</title>
      </Head>
      <div>
        <h2 className="h2">Braavos: Dragon Eggs from the Northern Shore</h2>
      </div>
      <div>
        <h2 className="h2">Lys: Dragon Eggs from the Southern Isles</h2>
      </div>
      <div>
        <h2 className="h2">Qohor: Dragon Eggs from the Eastern Mountains</h2>
      </div>
    </Layout>
  );
}
