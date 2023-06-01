import React, { useState } from 'react'

interface donationAddFormProps {
  name: string
  target: number
  description: string
  postedBy: string
  date: string
}

const DonationAddForm = () => {
  const [data, setData] = useState<donationAddFormProps>({
    name: '',
    target: 0,
    description: '',
    postedBy: '',
    date: Date(),
  })
  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
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
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Campaign Name"
                  onChange={onValueChange}
                  value={data.name}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="target"
                  className="leading-7 text-sm text-gray-600"
                >
                  Target
                </label>
                <input
                  type="number"
                  id="target"
                  name="target"
                  onChange={onValueChange}
                  value={data.target}
                  step={500}
                  min={500}
                  placeholder="Campaign Target in Rupees"
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
            <div className="p-2 w-full">
              <button
                type="submit"
                onSubmit={handleSubmit}
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
