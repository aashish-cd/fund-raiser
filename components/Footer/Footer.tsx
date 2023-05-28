import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { navLinks } from '../NavBar/Navbar'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer + ' primary-text'}>
      <hr className={styles.horizontalline + ' section-margin'} />
      <div className={styles.footerContainer}>
        <div className={styles.mainContainer}>
          <div>
            <Image
              src={'/logo.png'}
              className={styles.logo}
              alt="fund-raiser"
              width={319}
              height={108}
            />
          </div>
          <div className={styles.insideMainContainer}>
            <div className={styles.firstContainer}>
              {navLinks.map((nav, index) => (
                <Link
                  href={nav.link}
                  key={index}
                  style={{ textDecoration: 'none' }}
                >
                  <p className={'primary-text'}>{nav.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="primary-text"
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          position: 'sticky',
          bottom: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.2rem',
        }}
      >
        {`A Minor Project on 'Fund Raiser Using RNN' `}
        <div
          style={{
            marginTop: '1.5rem',
            fontSize: '1rem',
            textAlign: 'left',
            width: '60%',
          }}
        >
          <p>Team Members :</p>
          <p>Aashish Bhatt</p>
          <p>Bikram Bashyal</p>
          <p>Manoj Kumar Chauhan</p>
          <p>Willson Ghimire</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
