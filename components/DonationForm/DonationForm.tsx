import { Campaign } from '@/types'
import KhaltiPay from '@/utils/khalti'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const DonationForm = ({
  showPopup,
  setShowPopup,
  email,
  fundraiserId,
  campaignData,
}: {
  showPopup: boolean
  setShowPopup: any
  email: string
  fundraiserId: string
  campaignData: Campaign
}) => {
  const [data, setData] = useState({
    name: '',
    amount: 0,
  })

  const handleValueChange = (e: any) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handlePayment = (e: any) => {
    e.preventDefault()
    console.log({ date: `${new Date().toISOString().slice(0, 10)}` })
    try {
      const khaltiCheckout = KhaltiPay(
        {
          userId: email,
          fundraiserId: fundraiserId,
          donationAmount: data.amount,
          donationDate: `${new Date().toISOString().slice(0, 10)}`,
        },
        campaignData
      )
      khaltiCheckout.show({
        amount: data.amount * 100, // Amount in paisa (e.g., 1000 paisa = NPR 10)
        // Add other required parameters such as "mobile", "email", etc.
      })
      setShowPopup(false)
    } catch (error) {
      toast.error('Payment Unsuccessful')
    }
  }
  return (
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
        onClick={() => setShowPopup(false)}
      >
        <p className="text-3xl">x</p>
      </button>
      <form className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
        <p className=" text-gray-600 ">Email : {email}</p>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleValueChange}
              value={data.name}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="amount" className="leading-7 text-sm text-gray-600">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Enter donation amount"
              onChange={handleValueChange}
              value={data.amount}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handlePayment}
          className="primary-button text-white w-full bg-blue-500 py-2 px-4 rounded "
        >
          Donate Now
        </button>
      </form>
    </div>
  )
}

export default DonationForm
