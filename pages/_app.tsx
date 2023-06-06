import Head from 'next/head'
import '@/styles/globals.scss'

import type { AppProps } from 'next/app'
import MyProvider from '@/context/ContextProvider'
import NavBar from '@/components/NavBar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../styles/Home.module.scss'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Head>
        <title>Fund Raiser</title>
        <meta
          name="description"
          content="Fund Raiser using RNN. A minor project on Fund Raiser using Recurrent Neural Network."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <NavBar />
        <div className="mt-[100px]"></div>
        <Component {...pageProps} />
        <hr className="w-[100vw] mt-16 bg-gray-600 h-[2px]" />
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
    </MyProvider>
  )
}
