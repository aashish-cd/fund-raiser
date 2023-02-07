import React, { useState } from 'react'
import styles from './Hero.module.scss'
import { HeroSvg, ArrowSvg } from './HeroSvg'
import Typewriter from 'typewriter-effect'
import HeroInfo from './HeroInfo'

const Hero = () => {
  const animationText = ['SIGN', 'VELOP', 'LIVER']
  const [index, setIndex] = useState<number>(1)
  setTimeout(() => {
    if (index < 2) setIndex(index + 1)
    else setIndex(0)
  }, 3000)
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <ArrowSvg />
        <h1 className={`${styles.heading} outline-gradient-text`}>WE</h1>
        <HeroSvg />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.heading}>DE</span>
        <Typewriter
          options={{
            strings: animationText,
            loop: true,
            autoStart: true,
            delay: 120,
            wrapperClassName: styles.heading,
            cursor: '',
          }}
        />
      </div>
      <HeroInfo />
    </div>
  )
}

export default Hero
