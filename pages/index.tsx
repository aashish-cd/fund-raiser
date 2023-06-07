import { useContext, useEffect, useState } from 'react'

import Hero from '@/components/Hero/Hero'
import DonationCard from '@/components/DonationCard/DonationCard'
import { useRouter } from 'next/router'
import MyContext from '@/context/MyContext'

export default function Home() {
  const { recommendedDonations } = useContext(MyContext)
  return (
    <>
      <Hero />
      <DonationCard text='Recommended' data={recommendedDonations} />
    </>
  )
}
