import React, { Component } from 'react'

export class Companies extends Component {
    render() {
        return (
            <div>
                <section className="bg-pink-200 pt-7 pb-14">
        <div className="container px-8 mx-auto sm:px-12 lg:px-20">
          <h1 className="text-sm font-bold tracking-wide text-center text-gray-800 uppercase mb-7">Trusted by top-leading companies.</h1>
          <div className="flex grid items-center justify-center grid-cols-4 grid-cols-12 gap-y-8">
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/disney-plus.svg" alt="Disney Plus" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/google.svg" alt="Google" className="block object-contain h-9" />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/hubspot.svg" alt="Hubspot" className="block object-contain h-9" />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/youtube.svg" alt="Youtube" className="block object-contain h-7 lg:h-8" />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/slack.svg" alt="Slack" className="block object-contain h-9" />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/shopify.svg" alt="Shopify" className="block object-contain h-9" />
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default Companies
