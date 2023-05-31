import DonationAddForm from '@/components/DonationAddForm/DonationAddForm'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import MyContext from '@/context/MyContext'

const StartCampaign = () => {
  const router = useRouter()

  const { isLoggedin } = useContext(MyContext)

  useEffect(() => {
    !isLoggedin && router.push('/SignUp')
  }, [isLoggedin])
  return <DonationAddForm />
}

export default StartCampaign
