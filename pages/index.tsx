import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vyoma | Autonomous Delivery</title>
        <meta name="description" content="Next-gen autonomous delivery vehicles" />
      </Head>
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
}