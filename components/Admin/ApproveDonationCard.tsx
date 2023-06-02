import React from 'react'

const ApproveDonationCard = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap items-center gap-2">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Meditation bushwick direct trade taxidermy shaman
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
            </div>
            <div className="flex gap-5 h-16">
              <button className="bg-green-700 text-white py-0 px-10 border-1  rounded-2xl">
                Approve
              </button>
              <button className="bg-red-700 text-white py-0 px-10 border-1 rounded-2xl">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApproveDonationCard
