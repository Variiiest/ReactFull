import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
            <div className="">

<section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <p className="font-medium text-blue-500 uppercase">Building Businesses</p>
              <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                Changing The Way People Do Business.
              </h2>
              <p className="text-xl text-gray-600 md:pr-16">Learn how to engage with your visitors and teach them about your mission. We're revolutionizing the way customers and businesses interact.</p>
            </div>
            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
                <div className="block mb-4 border border-gray-200 rounded-full">
                  <input type="text" name="email" id="email" className="block w-full px-4 py-3 border-2 border-transparent rounded-full focus:border-blue-500 focus:outline-none" placeholder="Email address" />
                </div>
                <div className="block mb-4 border border-gray-200 rounded-full">
                  <input type="password" name="password" id="password" className="block w-full px-4 py-3 border-2 border-transparent rounded-full focus:border-blue-500 focus:outline-none" placeholder="Password" />
                </div>
                <div className="block mb-4 border border-gray-200 rounded-full">
                  <input type="password" name="password" id="password" className="block w-full px-4 py-3 border-2 border-transparent rounded-full focus:border-blue-500 focus:outline-none" placeholder="Password" />
                </div>
                <div className="block">
                  <button className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-full hover:bg-blue-700 ease">Log Me In</button>
                </div>
                <div className="block">
                  <button className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-full hover:bg-gray-100 ease">Log Me In</button>
                </div>
                <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_" className="text-blue-500 underline">Sign up here</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default SignUp
