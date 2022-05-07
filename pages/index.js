import Head from 'next/head';
import { FirstIntro, HeroSection, Marketplace, SecondIntro } from '../components';
import Layout from '../components/molecules/Layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Twostep - Landing Page</title>
        <meta name="description" content="TwoStep Apparel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection />
        <Marketplace />
        <FirstIntro />
        <SecondIntro />
      </Layout>
    </>
  );
}
