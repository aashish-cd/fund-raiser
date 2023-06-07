import React, { useState, useEffect, useContext } from 'react'
import styles from './NavBar.module.scss'
import Image from 'next/image'
import MobileSlideInBar from './MobileSlideInBar/MobileSlideInBar'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MyContext from '@/context/MyContext'

const NavBar = () => {
  const { user, handleSignin, isAdmin } = useContext(MyContext)
  const [showSidebar, setShowSidebar] = useState(false)
  const [active, setActive] = useState(0)
  const reset = () => setShowSidebar(() => false)
  const set = () => setShowSidebar(() => true)
  const router = useRouter()
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
                className={styles.logo}
                alt="fund-raiser"
                width={100 * 2}
                height={22.7 * 2}
                onClick={() => router.push('/')}
              />
            </div>
            <div className={styles.ItemsSection}>
              {(user ? loginLinks : navLinks).map((nav, index) => (
                <Link
                  href={nav.link}
                  key={index}
                  style={{ textDecoration: 'none' }}
                >
                  <p className="primary-text" style={{color: active === index ? 'green' : ''}} onClick={()=>setActive(index)}>{nav.name}</p>
                </Link>
              ))}
              {isAdmin && (
                <Link href="/admin" style={{ textDecoration: 'none' }}>
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
          {
            <MobileSlideInBar
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
              active={active} setActive={setActive}
            />
          }
        </div>
      </nav>
    </>
  )
}
export const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  // {
  //   name: 'Charity',
  //   link: '/charity',
  // },
  {
    name: 'Campaigns',
    link: '/campaigns',
  },
  {
    name: 'Top Donors',
    link: '/top-donors',
  },
]
export const loginLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Campaigns',
    link: '/campaigns',
  },
  {
    name: 'Top Donors',
    link: '/top-donors',
  },
  {
    name: 'My Profile',
    link: '/dashboard',
  },
]
export default NavBar
