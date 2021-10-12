import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <p>
        Come to my office in Braavos Monday through Friday dawn til dusk.
        Alternatively, please send a raven!
      </p>
    </Layout>
  );
}
