import MyContext from '@/context/MyContext'
import { Campaign } from '@/types'
import KhaltiPay from '@/utils/khalti'
import React, { useContext, useState } from 'react'
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
    amount: null,
  })
  const { user } = useContext(MyContext)

  const handleValueChange = (e: any) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handlePayment = (e: any) => {
    e.preventDefault()
    if (!data.name) {
      toast.error('Please fill all the fields')
      return
    }
    if (!user.email) {
      toast.error('Please login to donate')
      return
    }
    if (!data.amount || data.amount <= 0 || data.amount > 200) {
      toast.error(
        'Amount must be greater than 0 and less than 200 for testing purpose'
      )
      return
    }
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
      className="flex flex-col justify-center items-center"
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        backgroundColor: '#ddd',
        padding: '1rem',
        borderRadius: 10,
        zIndex: 111,
        width: '90%',
        height: '90%',
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
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter donation amount"
              onChange={handleValueChange}
              value={data?.amount || ''}
              step={100}
              min={1}
              max={200}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={!user}
          onClick={user && handlePayment}
          className="primary-button text-white w-full bg-blue-500 py-2 px-4 rounded "
        >
          Donate Now
        </button>
      </form>
    </div>
  )
}

export default DonationForm
