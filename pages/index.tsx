import { useState } from 'react'

import Hero from '@/components/Hero/Hero'

export default function Home() {
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  return (
    <>
      <Hero />
    </>
  )
}
