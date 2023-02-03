import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import HowWeWork from '@/components/HowWeWork/HowWeWork'
import styles from '../styles/Home.module.scss'
import { howWeWorkData, ourServicesData } from './api/data'

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <h1 className="outline-gradient-text">HELLO {'    '}WORLD</h1>

        <HowWeWork
          title={{
            mainText: 'OUR',
            text: 'SERVICES',
          }}
          data={ourServicesData}
        />
        <HowWeWork
          title={{
            mainText: 'HOW WE',
            text: 'WORK ?',
          }}
          data={howWeWorkData}
        />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
