import Footer from '@/components/Footer/Footer'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <h1 className="outline-gradient-text">HELLO {'    '}WORLD</h1>
        <button className="primary-button">Hello world</button>
        <div style={{ height: '90vh' }}></div>
        <Footer />
      </main>
    </>
  )
}
