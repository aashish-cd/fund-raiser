import React, { useState } from 'react'
import styles from './Hero.module.scss'
import Typewriter from 'typewriter-effect'

import Image from 'next/image'
import hero from '../Assets/Hero.svg'
import { useRouter } from 'next/router'

const Hero = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={`section-margin ${styles.infoContainer}`}>
          <div className={styles.textContainer}>
            <h1>
              <span className="outline-gradient-text">Happiness</span> comes
              from your action.
            </h1>
            <p className="secondary-text">
              Be a part of the breakthrough and make someone&apos;s dream come
              true.
            </p>
            <div className={styles.buttonContainer}>
              <button
                className="primary-button text-white"
                onClick={() => router.push('/campaigns')}
              >
                Donate now
              </button>
              <button
                className="primary-button text-white"
                style={{ background: '#ff585f' }}
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
