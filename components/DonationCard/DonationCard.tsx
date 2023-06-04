import React from 'react'
import styles from './DonationCard.module.scss'
import Image from 'next/image'
import donationImage from '../Assets/Donation.svg'
// import khaltipay from '../../utils/khalti'
import KhaltiPay from '../../utils/khalti'

const DonationCard = ({
  data,
  text = 'Open',
}: {
  data: Array<any>
  text?: string
}) => {

    
    const handlePayment = () => {
      const khaltiCheckout = KhaltiPay();
      khaltiCheckout.show({
        amount: 1000, // Amount in paisa (e.g., 1000 paisa = NPR 10)
        // Add other required parameters such as "mobile", "email", etc.
      });
  


  }



  return (
    <div className={styles.container}>
      <h1 className="primary-text text-3xl mb-5">
        {text} <span className="outline-gradient-text"> Campaigns</span>
      </h1>
      <div className={styles.container}>
        {data?.map((item, index) => (
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
                <button onClick={handlePayment}className={'primary-button text-white'}>
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
