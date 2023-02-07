import React from 'react'
import styles from './HeroInfo.module.scss'
import { RocketSvg } from './HeroSvg'

const HeroInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <RocketSvg style={{ maxWidth: '120%' }} classes={styles.svg} />
      <div className={styles.textContainer}>
        <h1>
          Innovative <span className="outline-gradient-text">Solutions</span>{' '}
          for Thriving Businesses
        </h1>
        <p className="secondary-text">
          &quot;We turn technology into solutions that drive success. From
          branding to web and app development, we offer a full suite of services
          to help businesses thrive in the digital world. Our team of IT experts
          is passionate about delivering innovative, high-quality solutions that
          exceed our clients&apos; expectations. Whether you&apos;re looking to
          build a new website, launch a mobile app, or revitalize your brand,
          we&apos;ve got the expertise and experience to make it happen. Let us
          be your partner in technology, and together we&apos;ll turn your
          vision into reality.&quot;
        </p>
      </div>
    </div>
  )
}

export default HeroInfo
