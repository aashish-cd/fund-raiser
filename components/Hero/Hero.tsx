import React, { useState } from 'react'
import styles from './Hero.module.scss'
import { HeroSvg, ArrowSvg } from './HeroSvg'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  const animationText = ['DESIGN', 'DEVELOP', 'DELIVER']
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
        <Typewriter
          // className={styles.heading}
          options={{
            strings: animationText,
            loop: true,
            autoStart: true,
            delay: 120,
            wrapperClassName: styles.heading,
            cursor: '',
          }}
          // onInit={(typewriter) => {
          //   typewriter
          //     .typeString(animationText[0])
          //     .pauseFor(2000)
          //     .deleteAll()
          //     .typeString(animationText[1])
          //     .pauseFor(2000)
          //     .deleteAll()
          //     .typeString(animationText[2])
          //     .start()
          // }}
        />
      </div>
    </div>
  )
}

export default Hero
