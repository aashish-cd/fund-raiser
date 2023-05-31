import React, { useContext } from 'react'
import styles from './MobileSlideInBar.module.scss'

import Link from 'next/link'
import { loginLinks, navLinks } from '../Navbar'
import MyContext from '@/context/MyContext'

const MobileSlideInBar = ({ showSidebar }: { showSidebar: boolean }) => {
  const { isLoggedin, handleSignin } = useContext(MyContext)
  return (
    <div
      className={`${styles.SidebarContainer}  ${
        showSidebar ? styles.showSidebar : styles.hideSidebar
      }`}
    >
      <div className={` ${styles.navLinks}`}>
        {(isLoggedin ? loginLinks : navLinks).map((nav, index) => (
          <Link href={nav.link} key={index} style={{ textDecoration: 'none' }}>
            <p className="primary-text">{nav.name}</p>
          </Link>
        ))}

        <button
          className={'primary-button text-white'}
          onClick={() => handleSignin(isLoggedin)}
        >
          {isLoggedin ? 'Sign Out ' : 'Sign In'}
        </button>
      </div>
    </div>
  )
}

export default MobileSlideInBar
