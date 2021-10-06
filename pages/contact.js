import head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <head>
        <title>Contact</title>
      </head>
      <div>
        Please come to my office in Braavos Monday through Friday dawn til dusk.
        Alternatively, please send a raven.
      </div>
    </Layout>
  );
}
