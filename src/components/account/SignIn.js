import React, { Component } from 'react'

class SignIn extends Component {
    render() {
        return (
            <div>
   <section className="w-full px-8 py-16 colorviolet xl:px-8">
        <div className="max-w-full sm:mx-8 mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-4/5 md:pr-16">
              <p className="font-bold text-white uppercase px-2 py-2 bg-blue-600 w-32 rounded-full pl-4">Let's Start</p>
              <h2 className="text-2xl font-extrabold leading-none text-gray-100 sm:text-3xl md:text-5xl">
                Changing The Way People Do Business.
              </h2>
              <p className="text-xl text-gray-200 md:pr-16">Learn how to engage with your visitors and teach them about your mission. We're revolutionizing the way customers and businesses interact.</p>
            </div>
            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <div className="relative  h-auto p-4 py-10 overflow-hidden bg-gray-900  rounded-lg shadow-2xl px-7">
                <h3 className="mb-6 text-2xl font-medium text-center text-gray-100">Sign in to your Account</h3>
                <div className="block mb-4   rounded-full">
                  <input type="text" name="email" id="email" className="block w-full px-4 py-3 text-gray-100  rounded-full  focus:outline-none bg-gray-800" placeholder="Email address" />
                </div>
                <div className="block mb-4   rounded-full">
                  <input type="password" name="password" id="password" className="block w-full px-4 py-3 text-gray-100  rounded-full  focus:outline-none bg-gray-800" placeholder="Password" />
                </div>
                <div className="block">
                  <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-full focus:outline-none">Log Me In</button>
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

export default SignIn
