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
      <div className={'$(styles.navLinks) primary-background-color'}>
        sujan
        {/* {nav.map((item, idx) => (
          <Link href={item.link} key={idx}>
            {item.name}
          </Link>
        ))} */}
      </div>
    </div>
  )
}

export default MobileSlideInBar
