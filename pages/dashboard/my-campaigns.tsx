import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import MyContext from '@/context/MyContext'
import DonationCard from '@/components/DonationCard/DonationCard'
import { Campaign } from '@/types'

const MyCampaigns = () => {
  const router = useRouter()

  const { user, allCampaigns } = useContext(MyContext)

  useEffect(() => {
    !user && router.push('/login')
  }, [user])
  return (
    <div>
      {user && (
        <DonationCard
          data={allCampaigns?.filter(
            (campaign: Campaign) => campaign.userEmail === user.email
          )}
          text="My"
        />
      )}
    </div>
  )
}

export default MyCampaigns
