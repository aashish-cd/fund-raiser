import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer + ' primary-text'}>
      <hr className={styles.horizontalline} />
      <div className={styles.footerContainer}>
        <div className={styles.mainContainer}>
          <div>
            <Image
              src={'/Mantralogo.png'}
              alt="mantrapic"
              width={319}
              height={108}
            />
          </div>
          <div className={styles.insideMainContainer}>
            <div className={styles.firstContainer}>
              <a className={styles.firstContainerTitle}>Pages</a>
              <a className={styles.marginLeft}>About</a>
              <a>Services</a>
              <a>Projects</a>
              <a>Contact</a>
            </div>
            <div className={styles.firstContainer}>
              <a className={styles.firstContainerTitle}>Social Media</a>
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={'/Facebook.svg'}
                    alt="mantrapic"
                    width={16.67}
                    height={16.67}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src={'/Instagram.svg'}
                    alt="mantrapic"
                    width={16.67}
                    height={16.67}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src={'/Linkedin.svg'}
                    alt="mantrapic"
                    width={16.67}
                    height={16.67}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src={'/Dribble.svg'}
                    alt="mantrapic"
                    width={16.67}
                    height={16.67}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.horizontalline} />
      <div className={styles.totalFooter}>
        <p>&copy; 2023 Designed and developed by team mantra</p>
        <div className={styles.privacyAndImprint}>
          <a>Privacy</a>
          <a>Imprint</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
