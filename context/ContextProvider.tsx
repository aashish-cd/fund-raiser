import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { auth, getAllDonations } from '@/firebase'
import { useRouter } from 'next/router'
import { Campaign, Interaction } from '@/types'
import { whiteListedAdmins } from '@/pages/admin'
import { getAllInteractions, getAllUsers } from '@/firebase/firebase'
import axios from 'axios'

const MyProvider = ({ children }: any) => {
  const [data, setData] = useState([])
  const [isLoggedin, setIsLoggedin] = useState(true)
  const [user, setUser] = useState(auth.currentUser)
  const router = useRouter()
  const [allCampaigns, setAllCampaigns] = useState<Array<Campaign>>()
  const [unApprovedCampaigns, setUnApprovedCampaigns] =
    useState<Array<Campaign>>()
  const [isAdmin, setIsAdmin] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [allInteractions, setAllInteractions] = useState<Array<Interaction>>()
  const [recommendedDonations, setRecommendedDonations] = useState()
  const [allUsers, setAllUsers] = useState<any>()

  const handleSignin = () => {
    if (user) {
      auth.signOut()
      setIsLoggedin(false)
    } else {
      router.push('/login')
      setIsAdmin(false)
    }
  }
  const fetchRecommendedDonations = async (email: string) => {
    // next api call to api/train
    const res = await axios.get('/api/cosine', {
      params: {
        email: email ? email : 'mkchauhan647@gmail.com',
      },
    })
    // setRecommendedDonations(res.data)
    setRecommendedDonations(res.data.recommendedData)
    console.log({ res: res.data })
    // const res = await recommendFundraisers(user?.email, 5)
    // console.log(res)
    // setAllCampaigns(res.filter((campaign: Campaign) => campaign.isVerified))
  }
  const fetchDonations = async () => {
    const res = await getAllDonations()
    setAllCampaigns(res.filter((campaign: Campaign) => campaign.isVerified))
  }
  const fetchUsers = async () => {
    const res = await getAllUsers()
    setAllUsers(res)
    fetchRecommendedDonations(user?.email)
    // console.log({ users: res })
  }
  const fetchAllInteractions = async () => {
    const res = await getAllInteractions()
    setAllInteractions(res)
    // console.log({ interactions: res })
  }
  const fetchUnApprovedDonations = async () => {
    const res = await getAllDonations()
    setUnApprovedCampaigns(
      res.filter((campaign: Campaign) => !campaign.isVerified)
    )
  }

  useEffect(() => {
    //update user state
    auth.onAuthStateChanged((user) => {
      setIsAdmin(false)
      setUser(user)
      whiteListedAdmins.includes(user?.email) && setIsAdmin(true)
    })
    allUsers && fetchRecommendedDonations(user?.email)
  }, [auth.currentUser])
  useEffect(() => {
    fetchDonations()
    fetchUnApprovedDonations()
    fetchAllInteractions()
    fetchUsers()
  }, [])
  // useEffect(() => {
  //   fetchRecommendedDonations(null)
  // }, [])

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
    isAdmin,
    setIsAdmin,
    showEditModal,
    setShowEditModal,
    allInteractions,
    setAllInteractions,
    recommendedDonations,
    setRecommendedDonations,
    allUsers,
    setAllUsers,
  }

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

export default MyProvider
