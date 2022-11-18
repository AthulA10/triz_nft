import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import NavBar from '../components/navbar';
import Hero from '../components/hero';
import Categ from '../components/categories';
import Trending from '../components/trending';



export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="bg-[#152022] ">
      <Head>
        <title>Trizwit-NFTMockup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* navbar start */}
      <div > <NavBar/> </div>
      {/* nav bar end */}

      <main >
        <Hero/>
        <Trending/>
      <Categ/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
