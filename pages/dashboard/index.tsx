import DonationAddForm from '@/components/DonationAddForm/DonationAddForm'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import MyContext from '@/context/MyContext'
import EditProfileModal from '@/components/EditProfileModal/EditProfileModal'
import { getUser } from '@/firebase'
import { User } from '@/types'

const Dashboard = () => {
  const router = useRouter()

  const { user, showEditModal, setShowEditModal } = useContext(MyContext)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    !user && router.push('/login')
  }, [user])
  const fetchUserData = async () => {
    const res = await getUser(user?.email)
    setShowEditModal(false)
    if (!res) setShowEditModal(true)
    else setUserData(res)
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  return (
    <section className="text-gray-600 body-font w-full flex flex-col justify-center">
      <div className="flex flex-wrap justify-center m-5">
        <Link
          href="/dashboard/start-campaign"
          className="p-4 h-[400px]  min-w-[400px] m-2"
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
          className="p-4 h-[400px] min-w-[400px] m-2"
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
      <div className="flex flex-col justify-center items-center -mt-10">
        {userData && (
          <div className="flex flex-col m-5 gap-3">
            <h1 className="primary-text text-center text-2xl">My Details</h1>
            <h1>Email: {user.email}</h1>
            <h1>Age: {userData.demographics.age}</h1>
            <h1>Gender: {userData.demographics.gender}</h1>
            <h1>Location: {userData.demographics.location}</h1>
            <p className="w-full flex flex-wrap">
              Interests:
              {userData.interests.map((item, index) => (
                <span
                  key={index}
                  className="p-2 m-1 bg-green-300 rounded-2xl flex w-fit flex-wrap"
                >
                  {item}
                </span>
              ))}
            </p>
          </div>
        )}
        {
          <button
            className="primary-button hover:bg-blue-500 text-white "
            onClick={() => setShowEditModal((prev: any) => !prev)}
          >
            <h1>Edit profile Details</h1>
          </button>
        }

        {showEditModal && user && (
          <EditProfileModal
            email={user.email}
            setShowEditModal={setShowEditModal}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </div>
    </section>
  )
}

export default Dashboard
