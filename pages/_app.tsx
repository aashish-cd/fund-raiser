import Head from 'next/head'
import '@/styles/globals.scss'
import '../styles/privacy.scss'
import type { AppProps } from 'next/app'
import MyProvider from '@/context/ContextProvider'
import NavBar from '@/components/NavBar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../styles/Home.module.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Head>
        <title>Mantra Labs</title>
        <meta name="description" content="Mantra Labs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <NavBar />
        <Component {...pageProps} />

        <Footer />
      </main>
    </MyProvider>
  )
}
