import React from 'react'
import styles from './MobileSlideInBar.module.scss'

import Link from 'next/link'

const MobileSlideInBar = ({ showSidebar }: { showSidebar: boolean }) => {
  return (
    <div
      className={`${styles.SidebarContainer}  ${
        showSidebar ? styles.showSidebar : styles.hideSidebar
      }`}
    >
      <div className={styles.navLinks}>
        <p>About</p>
        <p>Projects</p>
        <p>Services</p>
        <button className={'${styles.Touchbt} primary-button'}>
          Get In Touch
        </button>
      </div>
    </div>
  )
}

export default MobileSlideInBar
