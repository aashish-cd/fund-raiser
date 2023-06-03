import MyContext from '@/context/MyContext'
import { getAllDonations, storeDonation, uploadImage } from '@/firebase'
import { Campaign } from '@/types'
import React, { useContext, useEffect, useState } from 'react'

const DonationAddForm = () => {
  const { user } = useContext(MyContext)
  const [data, setData] = useState<Campaign>({
    title: '',
    description: '',
    goalAmount: 0,
    currentAmount: 0,
    image: '',
    category: '',
    isVerified: false,
    endDate: '',
    userEmail: user?.email,
  })
  const onValueChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      console.log('Adding Campaign')
      await storeDonation(data)
      setData({
        title: '',
        description: '',
        goalAmount: 0,
        currentAmount: 0,
        image: '',
        category: '',
        isVerified: false,
        endDate: '',
        userEmail: user?.email,
      })

      console.log('Campaign Added')
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileInputChange = async (e: any) => {
    const file = e.target.files[0]
    const fileRef = await uploadImage(file)
    setData({
      ...data,
      image: fileRef,
    })
  }

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Start Campaign
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Campaign for a cause
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="title"
                  className="leading-7 text-sm text-gray-600"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Campaign Title"
                  onChange={onValueChange}
                  value={data.title}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="goalAmount"
                  className="leading-7 text-sm text-gray-600"
                >
                  Goal Amount
                </label>
                <input
                  type="number"
                  id="goalAmount"
                  name="goalAmount"
                  onChange={onValueChange}
                  value={data.goalAmount}
                  step={100}
                  placeholder="Campaign's Goal in Rupees"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="description"
                  className="leading-7 text-sm text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Campaign Description"
                  onChange={onValueChange}
                  value={data.description}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            {/* end date */}
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="endDate"
                  className="leading-7 text-sm text-gray-600"
                >
                  End Date (In AD)
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  onChange={onValueChange}
                  value={data.endDate}
                  placeholder="Select End Date"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-0 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="category"
                  className="leading-7 text-sm text-gray-600"
                >
                  Select Category
                </label>
                <select
                  id="category"
                  name="category"
                  // onSelect={(e) => console.log(e.target)}
                  onChange={onValueChange}
                  value={data.category}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option selected>Choose category</option>

                  <option value="disaster">Disaster</option>
                  <option value="personal stories of affected peoples">
                    Personal stories of affected peoples
                  </option>
                  <option value="health campaign">Health campaign</option>
                  <option value="environment">Environment</option>
                  <option value="hunger">Hunger</option>
                  <option value="animals">Animals</option>

                  <option value="refugee campaign">Refugee campaign</option>
                  <option value="homelessness">Homelessness</option>
                  <option value="childcare">Childcare</option>
                  <option value="education">Education</option>
                </select>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="image"
                  className="leading-7 text-sm text-gray-600"
                >
                  Select Image
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => handleFileInputChange(e)}
                  placeholder="Select End Date"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-0 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {data.image && (
                  <img
                    src={data.image}
                    alt="product image"
                    style={{ width: '300px' }}
                  />
                )}
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Start a Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DonationAddForm
