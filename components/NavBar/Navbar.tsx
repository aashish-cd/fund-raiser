import React from 'react'
import styles from './NavBar.module.scss'
import Image from 'next/image'

const NavBar = () => {
  return (
    <>
      <div className={styles.MainDiv + ' primary-text'}>
        <div className={styles.logoSection}>
          <Image
            src={'/Mantralogo.png'}
            className={styles.mantraPic}
            alt="mantrapic"
            width={178}
            height={59}
          />
        </div>
        <div className={styles.ItemsSection}>
          <p>About</p>
          <p>Projects</p>
          <p>Services</p>
          <button className="primary-button">Get In Touch</button>
        </div>
      </div>
    </>
  )
}
export default NavBar
