import Head from 'next/head'
import '@/styles/globals.scss'
import '../styles/privacy.scss'
import type { AppProps } from 'next/app'
import MyProvider from '@/context/ContextProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Head>
        <title>Mantra Labs</title>
        <meta name="description" content="Mantra Labs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </MyProvider>
  )
}
