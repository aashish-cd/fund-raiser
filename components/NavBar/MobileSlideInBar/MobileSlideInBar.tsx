import React, { useContext } from 'react'
import styles from './MobileSlideInBar.module.scss'

import Link from 'next/link'
import { loginLinks, navLinks } from '../Navbar'
import MyContext from '@/context/MyContext'

const MobileSlideInBar = ({
  showSidebar,
  setShowSidebar,active, setActive
}: {
  showSidebar: boolean
  setShowSidebar: any
  active: number
  setActive: any
}) => {
  const { user, handleSignin, isAdmin } = useContext(MyContext)
  return (
    <div
      className={`${styles.SidebarContainer}  ${
        showSidebar ? styles.showSidebar : styles.hideSidebar
      }`}
    >
      <div
        className={` ${styles.navLinks}`}
        onClick={() => setShowSidebar(false)}
      >
        {(user ? loginLinks : navLinks).map((nav, index) => (
          <Link href={nav.link} key={index} style={{ textDecoration: 'none' }}>
            <p className="primary-text" style={{color: active === index ? 'green' : ''}} onClick={()=>setActive(index)}>{nav.name}</p>
          </Link>
        ))}
        {isAdmin && (
          <Link href={'/admin'} style={{ textDecoration: 'none' }}>
            <p className="primary-text" style={{color: active === 10 ? 'green' : ''}} onClick={()=>setActive(10)}>Admin</p>
          </Link>
        )}

        <button
          className={'primary-button text-white'}
          onClick={() => handleSignin()}
        >
          {user ? 'Sign Out ' : 'Sign In'}
        </button>
      </div>
    </div>
  )
}

export default MobileSlideInBar
