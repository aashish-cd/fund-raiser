import DonationForm from '@/components/DonationForm/DonationForm'
import MyContext from '@/context/MyContext'
import KhaltiPay from '@/utils/khalti'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Line } from 'rc-progress'
import React, { useContext, useState } from 'react'

const CampaignDetail = () => {
  const { allCampaigns, user, allInteractions } = useContext(MyContext)
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const router = useRouter()
  const { id } = router.query
  const campaignDetail = allCampaigns?.find((c: any) => c.id === id)

  if (!campaignDetail) return <div>Loading...</div>
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-full mx-auto flex flex-wrap lg:flex-nowrap">
            <Image
              height={350}
              width={350}
              alt={campaignDetail?.title}
              className="lg:w-[350px] w-full lg:h-[350px] h-60 object-cover object-center rounded"
              src={campaignDetail?.image}
            />
            <div className="flex flex-col gap-3 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {campaignDetail?.category.toUpperCase()}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {campaignDetail?.title}
              </h1>

              <p className="leading-relaxed">{campaignDetail?.description}</p>

              <Line
                percent={
                  (campaignDetail.currentAmount / campaignDetail.goalAmount) *
                  100
                }
                strokeWidth={4}
                strokeColor={'#00bbff'}
                className="my-5"
              />
              <p>
                {(
                  (campaignDetail.currentAmount / campaignDetail.goalAmount) *
                  100
                ).toFixed(1)}
                % (Rs. {campaignDetail.currentAmount}) Raised out of Rs.{' '}
                {campaignDetail.goalAmount}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="primary-button text-white "
            style={{ padding: '1rem 2rem', marginBottom: '2rem' }}
            onClick={() => setShowPopup(true)}
          >
            Donate Now
          </button>
          <p>Top Donations to this Campaign</p>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          S.N.
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Donation Amount
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Donation Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allInteractions
                        ?.filter((item: any) => item.fundraiserId === id)
                        .map((interaction: any, index: number) => {
                          return (
                            <tr className="bg-gray-100 border-b" key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {index + 1}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {interaction.userId.replace(
                                  /^(.{2})(.*)(.{3})$/,
                                  '$1********$3'
                                )}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Rs. {interaction.donationAmount}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {interaction.donationDate}
                              </td>
                            </tr>
                          )
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showPopup && (
        <DonationForm
          setShowPopup={setShowPopup}
          showPopup={showPopup}
          email={user.email}
          fundraiserId={campaignDetail.id}
          campaignData={campaignDetail}
        />
      )}
    </>
  )
}

export default CampaignDetail
