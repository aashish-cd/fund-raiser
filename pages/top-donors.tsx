import MyContext from '@/context/MyContext'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const TopDoners = () => {
  const { allInteractions } = useContext(MyContext)
  const router = useRouter()
  if (!allInteractions) return <div>Loading...</div>
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center ">
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
                      Donation Id
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
                  {allInteractions.map((interaction: any, index: number) => {
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
                        <td
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer hover:text-blue-500 "
                          onClick={() =>
                            router.push(
                              `/campaign-detail/${interaction.fundraiserId}`
                            )
                          }
                        >
                          {interaction.fundraiserId}
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
  )
}

export default TopDoners
