import { useEffect, useState } from 'react'

import Hero from '@/components/Hero/Hero'
import DonationCard from '@/components/DonationCard/DonationCard'
import { useRouter } from 'next/router'

export default function Home() {
  const [isLogin, setIsLogin] = useState<Boolean>(false)
  const router = useRouter()

  useEffect(() => {
    !isLogin && router.push('/SignUp')
  }, [isLogin])
  return (
    <>
      <Hero />
      <DonationCard />
    </>
  )
}
