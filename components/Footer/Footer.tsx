import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer + ' primary-text'}>
      <hr className={styles.horizontalline + ' section-margin'} />
      <div className={styles.footerContainer}>
        <div className={styles.mainContainer}>
          <div>
            <Image
              src={'/logo.png'}
              className={styles.mantraPic}
              alt="mantrapic"
              width={319}
              height={108}
            />
          </div>
          <div className={styles.insideMainContainer}>
            <div className={styles.firstContainer}>
              <a className={'primary-text'}>Pages</a>
              <a className={'primary-text'}>About</a>
              <a className={'primary-text'}>Services</a>
              <a className={'primary-text'}>Projects</a>
              <a className={'primary-text'}>Contact</a>
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
                    className={styles.image}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src={'/Instagram.svg'}
                    alt="mantrapic"
                    width={16.67}
                    height={16.67}
                    className={styles.image}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src={'/Linkedin.svg'}
                    alt="mantrapic"
                    width={16.67}
                    height={16.67}
                    className={styles.image}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src={'/Dribble.svg'}
                    alt="mantrapic"
                    width={16.67}
                    height={16.67}
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.horizontalline} style={{ marginTop: '2rem' }} />
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
