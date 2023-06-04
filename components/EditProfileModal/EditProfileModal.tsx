import { updateOrCreateUser } from '@/firebase/firebase'
import { User } from '@/types'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const EditProfileModal = ({
  setShowEditModal,
  email,
}: {
  setShowEditModal: any
  email: string
}) => {
  const [data, setData] = useState<User>({
    demographics: {
      age: 0,
      gender: '',
      location: '',
    },
    interests: [
      'disaster',
      'personal stories of affected peoples',
      'health campaign',
      'environment',
      'hunger',
      'animals',
      'refugee campaign',
      'homelessness',
      'childcare',
      'education',
    ],
  })

  const onDemographicsChange = (e: any) => {
    setData((prev) => ({
      ...prev,
      demographics: {
        ...prev.demographics,
        [e.target.name]: e.target.value,
      },
    }))
  }
  const onInterestChange = (e: any) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.value.split(','),
    }))
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await updateOrCreateUser(email, data)
      toast.success('Profile Updated', {
        className: 'toast-success',
      })
      setShowEditModal(false)
    } catch (error) {
      toast.error('Error updating profile', {
        className: 'toast-error',
      })
    }
  }
  return (
    <div className="primary-button ">
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)`,
          backgroundColor: '#ddd',
          padding: '1rem',
          borderRadius: 10,
          zIndex: 111,
          width: '90%',
          // backdropFilter: 'blur(10px)',
          // backfaceVisibility: 'hidden',
        }}
      >
        <button
          className="primary-button text-white text-3xl text-center absolute top-5 right-5 hover:bg-red-600 hover:text-white p-3"
          onClick={() => setShowEditModal(false)}
        >
          <p className="text-3xl">x</p>
        </button>
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Edit Your profile info
            </h1>
          </div>
          <p className=" lowercase ">Email: : {email}</p>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="age"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Enter your age"
                    onChange={onDemographicsChange}
                    value={data.demographics.age}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="gender"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Select Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    // onSelect={(e) => console.log(e.target)}

                    onChange={onDemographicsChange}
                    value={data.demographics.gender}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option selected>Choose Gender</option>

                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefer-no-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="location"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Location
                  </label>
                  <textarea
                    id="location"
                    name="location"
                    placeholder="User Location"
                    onChange={onDemographicsChange}
                    value={data.demographics.location}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="interests"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Interests (write multiple interests separated by comma)
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    placeholder="write multiple interests separated by comma"
                    onChange={onInterestChange}
                    value={data.interests}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileModal
