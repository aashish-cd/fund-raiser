import ApproveDonationCard from '@/components/Admin/ApproveDonationCard'
import DeleteDonations from '@/components/Admin/DeleteDonations'
import MyContext from '@/context/MyContext'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

export const whiteListedAdmins = [
  'bhattaashish303@gmail.com',
  'aashishbhatt258@gmail.com',
  'mkchauhan647@gmail.com',
  'joshinischal11@gmail.com',
  'willsonghimire58@gmail.com',
]

const Admin = () => {
  const { user, allCampaigns, isAdmin } = useContext(MyContext)
  const router = useRouter()

  useEffect(() => {
    !isAdmin && router.push('/')
  }, [user])
  return (
    <div>
      <ApproveDonationCard />
      <DeleteDonations />
    </div>
  )
}

export default Admin
