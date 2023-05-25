import React, { useState, useEffect } from 'react'
import styles from './NavBar.module.scss'
import Image from 'next/image'
import MobileSlideInBar from './MobileSlideInBar/MobileSlideInBar'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'

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
                src={'/logo.png'}
                className={styles.mantraPic}
                alt="mantrapic"
                width={100 * 2}
                height={22.7 * 2}
              />
            </div>
            <div className={styles.ItemsSection}>
              <p className="primary-text">About</p>
              <p className="primary-text">Projects</p>
              <p className="primary-text">Services</p>
              <button className={'${styles.Touchbt} primary-button'}>
                Get In Touch
              </button>
            </div>
            <div className={styles.onmobileonly}>
              <div
                className={`${styles.CancelOrOpen}`}
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <p className="primary-text">
                  {showSidebar ? (
                    <FaTimes className={` ${styles.icon}`} />
                  ) : (
                    <AiOutlineMenu className={` ${styles.icon}`} />
                  )}
                </p>
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
