import React, { useState, useEffect } from 'react'
import styles from './NavBar.module.scss'
import Image from 'next/image'

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const reset = () => setShowSidebar(() => false)
  const set = () => setShowSidebar(() => true)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', reset)
    }
    return () => {
      window.removeEventListener('resize', reset)
    }
  }, [])
  return (
    <>
      <nav className={styles.NavWrapper}>
        <div className={styles.MainDiv}>
          <div className={styles.Inter}>
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
              <button className={'${styles.Touchbt} primary-button'}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className={styles.MobileViewOnly}>
            <div className={styles.CancelOrOpen}>
              {showSidebar ? (
                <button onClick={set} />
              ) : (
                <button onClick={reset} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavBar
