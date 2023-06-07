import React, { useState } from 'react'
import styles from './DonationCard.module.scss'
import Image from 'next/image'
import donationImage from '../Assets/Donation.svg'
import { Campaign } from '@/types'
import { toast } from 'react-toastify'
import { Line } from 'rc-progress'
// import khaltipay from '../../utils/khalti'
import KhaltiPay from '../../utils/khalti'
import DonationForm from '../DonationForm/DonationForm'
import Link from 'next/link'
import { useRouter } from 'next/router'

const DonationCard = ({
  data,
  text = 'Open',
}: {
  data: Campaign[]
  text?: string
}) => {
  const router = useRouter()
  return (
    <>
      <h1 className="primary-text text-center text-3xl mb-5">
        {text} <span className="outline-gradient-text"> Campaigns</span>
      </h1>
      <div className={styles.container}>
        <div className={styles.container}>
          {data?.map((item, index) => (
            <Link href={`/campaign-detail/${item.id}`} key={index}>
              <div className={styles.card}>
                <Image
                  src={item.image}
                  alt="Card Image"
                  className={styles.image}
                  width={300}
                  height={300}
                />
                <div className={styles.details}>
                  <div className="flex w-full justify-between mb-2">
                    <p className="text-red-700 min-w-fit">{item.endDate}</p>
                    <p className="bg-red-700 px-2 py-1 text-white overflow-hidden rounded-2xl">
                      {item.category}
                    </p>
                  </div>
                  <Line
                    percent={(item.currentAmount / item.goalAmount) * 100}
                    strokeWidth={4}
                    strokeColor={'#00bbff'}
                  />
                  <p>
                    {((item.currentAmount / item.goalAmount) * 100).toFixed(1)}%
                    (Rs. {item.currentAmount}) Raised out of {item.goalAmount}
                  </p>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.description}>
                    {item?.description.split(' ').slice(0, 5).join(' ')} ...
                  </p>
                  <div className={styles.row} style={{ marginTop: '1rem' }}>
                    <button
                      className={'primary-button text-white'}
                      // onClick={() => setShowPopup(true)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <button className='primary-button text-white mt-8 px-10 w-40' onClick={()=>router.push('/campaigns')}>View All</button>
    </>
  )
}

export default DonationCard
