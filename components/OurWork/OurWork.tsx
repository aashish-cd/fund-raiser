import React from 'react'
import styles from './Works.module.scss'

const OurWork = () => {
  return (
    <>
      <div className={styles.Wraper}>
        <div className={styles.Upper}>
          <div className="outline-gradient-text">OUR</div>
          <div className={styles.Works}>Works</div>
        </div>
        <div className={styles.DemoWork}></div>
      </div>
    </>
  )
}
export default OurWork
