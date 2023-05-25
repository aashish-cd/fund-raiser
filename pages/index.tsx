import { useState } from 'react'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import NavBar from '@/components/NavBar/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  return (
    <>
      {isLoading ? (
        <div>
          <h1>Please Wait...</h1>
        </div>
      ) : (
        <main className={`${styles.main}`}>
          <NavBar />
          <Hero />
          <Footer />
        </main>
      )}
    </>
  )
}
