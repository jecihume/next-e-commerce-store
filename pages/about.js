import head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <head>
        <title>About</title>
      </head>
      <h2>
        A picture taken just before the hatching of a golden Qohori Dragon.
      </h2>

      <img src="/titleEgg.jpeg" alt="golden dragon egg" />
    </Layout>
  );
}
