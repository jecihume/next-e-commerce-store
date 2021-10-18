import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h2 className="h2">
        A picture taken just before the hatching of a golden Qohori Dragon.
      </h2>
      <img class="img" src="/titleEgg.jpeg" alt="golden dragon egg" />
    </Layout>
  );
}
