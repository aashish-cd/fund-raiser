import DonationAddForm from '@/components/DonationAddForm/DonationAddForm'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import MyContext from '@/context/MyContext'

const StartCampaign = () => {
  const router = useRouter()

  const { user } = useContext(MyContext)

  useEffect(() => {
    !user && router.push('/login')
  }, [user])
  return <DonationAddForm />
}

export default StartCampaign
