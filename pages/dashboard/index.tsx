import DonationAddForm from '@/components/DonationAddForm/DonationAddForm'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import MyContext from '@/context/MyContext'

const Dashboard = () => {
  const router = useRouter()

  const { isLoggedin } = useContext(MyContext)

  useEffect(() => {
    !isLoggedin && router.push('/SignUp')
  }, [isLoggedin])
  return (
    <section className="text-gray-600 body-font w-full">
      <div className="flex flex-wrap justify-center  m-10">
        <Link
          href="/dashboard/start-campaign"
          className="p-4 h-[400px]  min-w-[400px] m-8"
        >
          <div className=" bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
              Start a new campaign
            </h1>
            <p className="leading-relaxed mb-3">
              Click here to start a new <br /> campaign
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </Link>
        <Link
          href="/dashboard/my-campaigns"
          className="p-4 h-[400px] min-w-[400px] m-8"
        >
          <div className=" bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
              My Campaigns
            </h1>
            <p className="leading-relaxed mb-3">
              Click here to see your <br /> campaigns
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Dashboard
