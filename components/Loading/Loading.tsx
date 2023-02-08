import Image from 'next/image'
import React from 'react'
import styles from './Loading.module.scss'
const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <h1 className="outline-gradient-text">A</h1>
        <div className={styles.logoContainer}>
          <Image
            src="/mantra.svg"
            alt="mantra"
            className={styles.name}
            height={1213}
            width={257}
          />
          {[1, 2, 3].map((item) => (
            <Image
              src="/dot.svg"
              className={styles.dot}
              alt="mantra"
              width={40}
              height={39}
              key={item}
              style={{
                animationDelay: `${0.3 + item * 0.3}s`,
              }}
            />
          ))}
        </div>
        <h2 className="outline-gradient-text">FOR EVERYTHING</h2>
      </div>
    </div>
  )
}

export default Loading
