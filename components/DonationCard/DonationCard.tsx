import React from 'react'
import styles from './DonationCard.module.scss'
import Image from 'next/image'
import donationImage from '../Assets/Donation.svg'
import { Campaign } from '@/types'
import { toast } from 'react-toastify'
import { Line } from 'rc-progress'

const DonationCard = ({
  data,
  text = 'Open',
}: {
  data: Campaign[]
  text?: string
}) => {
  console.log({ myCampaigns: data })
  const handleDonation = async () => {
    console.log('donation')
    toast.success('Donation Successful', {
      className: 'toast-success',
    })
  }
  return (
    <>
      <h1 className="primary-text text-center text-3xl mb-5">
        {text} <span className="outline-gradient-text"> Campaigns</span>
      </h1>
      <div className={styles.container}>
        <div className={styles.container}>
          {data?.map((item, index) => (
            <div className={styles.card} key={index}>
              <Image
                src={item.image}
                alt="Card Image"
                className={styles.image}
                width={300}
                height={300}
              />
              <div className={styles.details}>
                <div>
                  <p className="text-red-700">{item.endDate}</p>
                </div>
                <Line
                  percent={(item.currentAmount / item.goalAmount) * 100}
                  trailWidth={2}
                  strokeWidth={4}
                  strokeColor="green"
                  trailColor="gray"
                />
                <p>
                  {((item.currentAmount / item.goalAmount) * 100).toFixed(1)}%
                  (Rs. {item.currentAmount}) Raised out of {item.goalAmount}
                </p>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item?.description}</p>
                <div className={styles.row} style={{ marginTop: '1rem' }}>
                  <button
                    className={'primary-button text-white'}
                    onClick={handleDonation}
                  >
                    Donate now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DonationCard
