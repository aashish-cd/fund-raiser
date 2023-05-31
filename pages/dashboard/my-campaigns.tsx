import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import MyContext from '@/context/MyContext'
import DonationCard from '@/components/DonationCard/DonationCard'

const MyCampaigns = () => {
  const router = useRouter()

  const { isLoggedin } = useContext(MyContext)

  useEffect(() => {
    !isLoggedin && router.push('/SignUp')
  }, [isLoggedin])
  return (
    <div>
      <DonationCard data={[1, 2, 3]} />
    </div>
  )
}

export default MyCampaigns
