import head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <head>
        <title>Essos Dragon Eggs Home</title>
      </head>
      <div>Paragraph 1</div>
      <div>Paragraph 2</div>
      <div>Paragraph 3</div>
    </Layout>
  );
}
