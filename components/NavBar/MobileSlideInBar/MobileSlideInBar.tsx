import React from 'react'
import styles from './MobileSlideInBar.module.scss'

import Link from 'next/link'
import { navLinks } from '../Navbar'

const MobileSlideInBar = ({ showSidebar }: { showSidebar: boolean }) => {
  return (
    <div
      className={`${styles.SidebarContainer}  ${
        showSidebar ? styles.showSidebar : styles.hideSidebar
      }`}
    >
      <div className={` ${styles.navLinks}`}>
        {navLinks.map((nav, index) => (
          <Link href={nav.link} key={index} style={{ textDecoration: 'none' }}>
            <p className="primary-text">{nav.name}</p>
          </Link>
        ))}

        <button className={'primary-button'}>Sign In</button>
      </div>
    </div>
  )
}

export default MobileSlideInBar
