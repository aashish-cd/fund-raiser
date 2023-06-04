import DonationAddForm from '@/components/DonationAddForm/DonationAddForm'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import MyContext from '@/context/MyContext'
import EditProfileModal from '@/components/EditProfileModal/EditProfileModal'
import { getUser } from '@/firebase'

const Dashboard = () => {
  const router = useRouter()

  const { user, showEditModal, setShowEditModal } = useContext(MyContext)

  useEffect(() => {
    !user && router.push('/login')
  }, [user])
  const fetchUserData = async () => {
    const res = await getUser(user?.email)
    if (!res) setShowEditModal(true)
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  return (
    <section className="text-gray-600 body-font w-full flex flex-col justify-center">
      {
        <button
          className="primary-button hover:bg-blue-500 text-white "
          onClick={() => setShowEditModal((prev: any) => !prev)}
        >
          <h1>Edit your profile Details</h1>
        </button>
      }

      {showEditModal && user && (
        <EditProfileModal
          email={user.email}
          setShowEditModal={setShowEditModal}
        />
      )}

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
            <p className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </p>
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
            <p className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Dashboard
