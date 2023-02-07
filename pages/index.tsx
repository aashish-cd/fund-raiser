import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import HowWeWork from '@/components/HowWeWork/HowWeWork'
import NavBar from '@/components/NavBar/Navbar'
import OurWork from '@/components/OurWork/OurWork'
import styles from '../styles/Home.module.scss'
import { howWeWorkData, ourServicesData } from './api/data'

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <NavBar />
        <Hero />
        <HowWeWork
          title={{
            mainText: 'OUR',
            text: 'SERVICES',
          }}
          data={ourServicesData}
        />
        <OurWork mainText="OUR" text="WORKS" />
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
