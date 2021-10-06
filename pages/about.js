import head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <head>
        <title>About</title>
      </head>
      <div>Here is a massive picture of a Dragon Egg.</div>
      {/* image with normal image tag from public directory */}
      <img src="/titleEgg.jpeg" alt="golden dragon egg" />
    </Layout>
  );
}
