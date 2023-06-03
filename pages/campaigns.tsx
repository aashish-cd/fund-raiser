import DonationCard from '@/components/DonationCard/DonationCard'
import MyContext from '@/context/MyContext'
import React, { useContext } from 'react'

const Donation = () => {
  const { allCampaigns } = useContext(MyContext)
  return (
    <div>
      <DonationCard data={allCampaigns} />
    </div>
  )
}

export default Donation
