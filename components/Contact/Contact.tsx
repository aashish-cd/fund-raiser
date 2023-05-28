import React from 'react'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={`section-margin ${styles.contact}`}>
      <div className={styles.connectPart}>
        <h1>
          <span className="outline-gradient-text">Let&apos;s</span> Connect
        </h1>
        {/* <p></p> */}
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.eachPart}>
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="Your Full Name" />
        </div>
        <div className={styles.eachPart}>
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Your Email" />
        </div>
        <div className={styles.eachPart}>
          <label htmlFor="company">Subject</label>
          <input id="company" placeholder="Your Company" />
        </div>
        <div className={styles.eachPart}>
          <label htmlFor="subject">Company Name</label>
          <input id="subject" placeholder="Subject to discuss on" />
        </div>
      </div>
      <div className={styles.messageContainer}>
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your Message" />
        <button className="primary-button">Send Message</button>
      </div>
    </div>
  )
}

export default Contact
