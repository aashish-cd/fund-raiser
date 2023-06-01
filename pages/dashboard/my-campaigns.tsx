import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import MyContext from '@/context/MyContext'
import DonationCard from '@/components/DonationCard/DonationCard'

const MyCampaigns = () => {
  const router = useRouter()

  const { user } = useContext(MyContext)

  useEffect(() => {
    !user && router.push('/login')
  }, [user])
  return (
    <div>
      <DonationCard data={[1, 2, 3]} text="My" />
    </div>
  )
}

export default MyCampaigns
