import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { auth, getAllDonations } from '@/firebase'
import { useRouter } from 'next/router'
import { Campaign } from '@/types'

const MyProvider = ({ children }: any) => {
  const [data, setData] = useState([])
  const [isLoggedin, setIsLoggedin] = useState(true)
  const [user, setUser] = useState(auth.currentUser)
  const router = useRouter()
  const [allCampaigns, setAllCampaigns] = useState<Array<Campaign>>()
  const [unApprovedCampaigns, setUnApprovedCampaigns] =
    useState<Array<Campaign>>()

  const handleSignin = () => {
    if (user) {
      auth.signOut()
    } else {
      router.push('/login')
    }
  }
  const fetchDonations = async () => {
    const res = await getAllDonations()
    console.log(res)
    setAllCampaigns(res.filter((campaign: Campaign) => campaign.isVerified))
  }

  const fetchUnApprovedDonations = async () => {
    const res = await getAllDonations()
    console.log(res)
    setUnApprovedCampaigns(
      res.filter((campaign: Campaign) => !campaign.isVerified)
    )
  }

  useEffect(() => {
    //update user state
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [auth.currentUser])
  useEffect(() => {
    fetchDonations()
    fetchUnApprovedDonations()
  }, [])

  const value = {
    data,
    setData,
    isLoggedin,
    setIsLoggedin,
    handleSignin,
    user,
    setUser,
    allCampaigns,
    setAllCampaigns,
    unApprovedCampaigns,
    setUnApprovedCampaigns,
  }

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

export default MyProvider
