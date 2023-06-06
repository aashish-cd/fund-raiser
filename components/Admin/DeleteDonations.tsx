import MyContext from '@/context/MyContext'
import { deleteDonation, editDonation } from '@/firebase'
import { Campaign } from '@/types'
import Image from 'next/image'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

const DeleteDonations = () => {
  const { allCampaigns, setAllCampaigns } = useContext(MyContext)

  const handleDecline = async (id: string) => {
    try {
      await deleteDonation(id)
      setAllCampaigns(allCampaigns?.filter((c: any) => c.id !== id))
      toast.success('Campaign Deleted successfully', {
        className: 'toast-success',
      })
    } catch (error) {
      toast.error('Error Deleting Campaign', { className: 'toast-error' })
    }
  }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <p className="text-red-600">Manage campaigns</p>
        <div className="-my-8 divide-y-2 divide-gray-100">
          {allCampaigns?.map((campaign: Campaign, index: number) => (
            <div
              className="py-8 flex flex-wrap md:flex-nowrap items-center gap-2"
              key={index}
            >
              <p> Date: {campaign.endDate}</p>
              <div>
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  height={100}
                  width={100}
                />
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {campaign.title}
                </h2>
                <p className="leading-relaxed">{campaign.description}</p>
              </div>
              <div className="flex gap-5 h-16">
                <button
                  className="bg-red-700 text-white py-0 px-10 border-1 rounded-2xl"
                  onClick={() => handleDecline(campaign.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeleteDonations
