import { useState } from 'react'

import Hero from '@/components/Hero/Hero'
import DonationCard from '@/components/DonationCard/DonationCard'

export default function Home() {
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  return (
    <>
      <Hero />
      <DonationCard />
    </>
  )
}
