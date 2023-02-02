import React from 'react'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.connectPart}>
        <h3>
          <span>Let&apos;s</span> Connect
        </h3>
        <p>Build your business together with MANTRA LABS</p>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.eachPart}>
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="Your Full Name" />
        </div>
        <div className={styles.eachPart}>
          <label htmlFor="name">Email</label>
          <input id="name" placeholder="Your Email" />
        </div>
        <div className={styles.eachPart}>
          <label htmlFor="name">Subject</label>
          <input id="name" placeholder="Your Company" />
        </div>
        <div className={styles.eachPart}>
          <label htmlFor="name">Company Name</label>
          <input id="name" placeholder="Subject to discuss on" />
        </div>
      </div>
      <div className={styles.messageContainer}>
        <label htmlFor="name">Message</label>
        <textarea id="name" placeholder="Your Message" rows={10} />
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default Contact
