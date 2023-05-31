import { useEffect, useState } from 'react'

import Hero from '@/components/Hero/Hero'
import DonationCard from '@/components/DonationCard/DonationCard'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <>
      <Hero />
      <DonationCard data={[1, 2, 3]} />
    </>
  )
}
