import Head from 'next/head';
import Layout from '../components/Layout';
import { myGlobalStyles } from '../styles/globalStyles';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h2 className="h2">
        Come to my office in Braavos Monday through Friday dawn til dusk.
        Alternatively, please send a raven!
      </h2>
    </Layout>
  );
}
