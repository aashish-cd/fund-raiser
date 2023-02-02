import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import HowWeWork from '@/components/HowWeWork/HowWeWork'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <h1 className="outline-gradient-text">HELLO {'    '}WORLD</h1>

    

        <HowWeWork />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
