import React from 'react'
import styles from './Works.module.scss'
import Image from 'next/image'
type titletype = {
  mainText: string
  text: String
}
import cursor from './cursor.svg'

const OurWork = (title: titletype) => {
  return (
    <>
      <div className={styles.Wraper}>
        <div className={styles.Maindiv}>
          <div className={styles.Upper}>
            <h1 className={styles.heading}>
              <span className={` outline-gradient-text`}>
                {title.mainText}{' '}
              </span>{' '}
              {title.text}
            </h1>
          </div>
          <div className={styles.DemoWork}>
            <div className={styles.Work1}>
              <div className={styles.ViewImage}>
                <Image src={cursor} alt="" />
              </div>
              <div className={styles.Content}>
                <div className={styles.title}>IN-DEPTH STORIES</div>
                <div className={styles.workTag}>website development</div>
              </div>
            </div>
            <div className={styles.Work2}>
              <div className={styles.dummy1}></div>
              <div className={styles.Content}>
                <div className={styles.title}>AR BUG HUNT Game</div>
                <div className={styles.workTag}>
                  Unity x AR Game Development
                </div>
              </div>
            </div>
            <div className={styles.Work3}>
              <div className={styles.dummy2}></div>
              <div className={styles.Content}>
                <div className={styles.title}>Branding Materials</div>
                <div className={styles.workTag}>Logo and Brand Guidelines</div>
              </div>
            </div>
          </div>
          <div className={styles.SeeAllProject}></div>
        </div>
      </div>
    </>
  )
}
export default OurWork
