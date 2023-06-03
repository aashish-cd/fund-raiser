import MyContext from '@/context/MyContext'
import { deleteDonation, editDonation } from '@/firebase'
import { Campaign } from '@/types'
import Image from 'next/image'
import React, { useContext } from 'react'

const ApproveDonationCard = () => {
  const { unApprovedCampaigns, setUnApprovedCampaigns, setAllCampaigns } =
    useContext(MyContext)
  const handleApproval = async (id: string, data: Campaign) => {
    console.log('Approving')
    await editDonation(id, data)
    setUnApprovedCampaigns(unApprovedCampaigns?.filter((c: any) => c.id !== id))
    setAllCampaigns((prev: any) => [...prev, data])
    console.log('Approved')
  }
  const handleDecline = async (id: string) => {
    console.log('Declining')
    await deleteDonation(id)
    console.log('Declined')
  }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {unApprovedCampaigns?.map((campaign: Campaign, index: number) => (
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
                  className="bg-green-700 text-white py-0 px-10 border-1 rounded-2xl"
                  onClick={() => handleApproval(campaign.id, campaign)}
                >
                  Approve
                </button>
                <button
                  className="bg-red-700 text-white py-0 px-10 border-1 rounded-2xl"
                  onClick={() => handleDecline(campaign.id)}
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ApproveDonationCard
