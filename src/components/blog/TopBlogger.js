import React, { Component } from 'react'

class TopBlogger extends Component {
    render() {
        return (
            <div>

        <div className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
          <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
              <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
                Pricing to fit the needs of any companie size.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
              {/* Price 1 */}
              <div className="box-border flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-md sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                  Starter
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                  <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                    $5
                  </p>
                  <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                    / month
                  </p>
                </div>
                <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                  Ideal for Startups and Small Companies
                </p>
                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automated Reporting
                  </li>
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Faster Processing
                  </li>
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Customizations
                  </li>
                </ul>
                <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-full cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                  Select Plan
                </button>
              </div>
              {/* Price 2 */}
              <div className="box-border flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-blue-600 border-solid rounded-md sm:p-6 md:px-8 md:py-16">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                  Basic
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                  <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                    $15
                  </p>
                  <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                    / month
                  </p>
                </div>
                <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                  Ideal for medium-size businesses to larger businesses
                </p>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Starter
                  </li>
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    100 Builds
                  </li>
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Progress Reports
                  </li>
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Premium Support
                  </li>
                </ul>
                <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-full cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                  Select Plan
                </button>
              </div>
              {/* Price 3 */}
              <div className="box-border flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-md sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                  Plus
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                  <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                    $25
                  </p>
                  <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                    / month
                  </p>
                </div>
                <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                  Ideal for larger and enterprise companies
                </p>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Basic
                  </li>
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited Builds
                  </li>
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced Analytics
                  </li>
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Company Evaluations
                  </li>
                </ul>
                <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-full cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-24 bg-white">
          <div className="px-8 mx-auto max-w-7xl lg:px-16">
            <h2 className="mb-4 text-xl font-bold md:text-3xl">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
              <div>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">What is Tails</h5>
                <p>Tails is a drag and drop page builder built on Top of TailwindCSS. You can drop components to create a page that you can export.</p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">Can I try it for Free?</h5>
                <p>Absolutely, you can try out tails for free; however, if you wish to access all the components and export the page you'll need to upgrade your account.</p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">Where do I go to upgrade my account?</h5>
                <p>
                  You can upgrade your account by visiting <a href="https://devdojo.com/pro" className="text-indigo-500 underline">The Pro Upgrade Page</a>. You will also gain access to many other applications and divs of the site.
                  <a href="https://help.hellonext.co/faq/startup-eligibility/" target="/">here</a>.
                </p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">How long will I have access to Tails</h5>
                <p>
                  You will have unlimited access to all your pre-built pages; however, if you want to be able to download and export your pages, you'll need a pro account.
                  <a href="https://paddle.com" target="/">Paddle</a> for processing payments.
                </p>
              </div>
              <div>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">How do I implement into my project</h5>
                <p>Implementation in your project is very simple. You can use the exported page as a starting point, or you can copy and paste the HTML into your own page.</p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">What is the license on the pages?</h5>
                <p>You have unlimited use to the templates used in Tails; however, you cannot re-use the templates to sell for others to use.</p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">Can I cancel my account if I not longer need it?</h5>
                <p>Of course, you can feel free to cancel your account at anytime, and you can feel free to come back and upgrade again whenever you're ready.</p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">What if I need help with my project?</h5>
                <p>If you need assistance implementing the templates into your project you can contact support or you can visit our <a href="https://devdojo.com/questions" className="text-indigo-500 underline">question div</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

            </div>
        )
    }
}

export default TopBlogger
