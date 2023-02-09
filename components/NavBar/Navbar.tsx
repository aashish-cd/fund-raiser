import React, { useState, useEffect } from 'react'
import styles from './NavBar.module.scss'
import Image from 'next/image'
import MobileSlideInBar from './MobileSlideInBar/MobileSlideInBar'

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const reset = () => setShowSidebar(() => false)
  const set = () => setShowSidebar(() => true)
  console.log(showSidebar)
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
            <div className={styles.onmobileonly}>
              <div className={styles.CancelOrOpen}>
                {showSidebar ? (
                  <button onClick={reset}>X</button>
                ) : (
                  <button onClick={set}>open</button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.NavBarmbl}>
          {<MobileSlideInBar showSidebar={showSidebar} />}
        </div>
      </nav>
    </>
  )
}
export default NavBar
