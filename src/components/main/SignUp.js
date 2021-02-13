import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
            <div className="w-full bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className=" w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
              <div className=" flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="">
                    <p className="mb-2 font-medium text-gray-700 uppercase">Work smarter</p>
                    <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Features to help you work smarter</h2>
                  </div>
                  <p className="text-2xl text-gray-700">We've created a simple formula to follow in order to gain more out of your business and your application.</p>
                  <a href="#_" className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Get Started Today</a>
                </div>
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-3xl font-bold">Signup</h4>
                <p className="text-lg text-gray-500">or, if you have an account you can <a href="#_" className="text-blue-600 underline">sign in</a></p>
                <div className=" w-full mt-10 space-y-8">
                  <div className="">
                    <label className="font-medium text-gray-900">Name</label>
                    <input type="text" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Name" />
                  </div>
                  <div className="">
                    <label className="font-medium text-gray-900">Email</label>
                    <input type="text" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Email Address" />
                  </div>
                  <div className="">
                    <label className="font-medium text-gray-900">Password</label>
                    <input type="text" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Password" />
                  </div>
                  <div className="">
                    <a href="#_" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Create Account</a>
                    <a href="#_" className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease">Sign up with Google</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
        )
    }
}

export default SignUp
