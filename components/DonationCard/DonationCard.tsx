import React from 'react'
import styles from './DonationCard.module.scss'
import Image from 'next/image'
import donationImage from '../Assets/Donation.svg'

const DonationCard = () => {
  return (
    <div className={styles.container}>
      <h1 className="primary-text ">
        Open <span className="outline-gradient-text"> Donations</span>
      </h1>
      <div className={styles.container}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={donationImage}
              alt="Card Image"
              className={styles.image}
              width={300}
              height={300}
            />
            <div className={styles.details}>
              <div className={styles.row}>
                <p>May 28, 2023</p>
                <p>100 donations</p>
              </div>
              <p className={styles.title}>Lorem ipsum dolor sit.</p>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis, libero. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ex, hic.
              </p>
              <div className={styles.row} style={{ marginTop: '1rem' }}>
                <button className={'primary-button text-white'}>
                  Donate now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DonationCard
