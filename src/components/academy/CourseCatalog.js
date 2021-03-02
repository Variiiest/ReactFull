import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import {Switch,Route } from 'react-router-dom';

import {Switch,Route } from 'react-router-dom';
import CourseDet from '../../pages/Academy/CourseDet';


class CourseCatalog extends Component {


    render() {
        return (
            <div>


              
      <section className="text-white body-font bg-gray-800">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-nowrap -m-4 overflow-y-auto scroll-hidden">
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-t-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/720x400" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <Link to="course" className="items-center justify-center px-6 py-2 rounded-full shadow-sm text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700">
                 CoursePage
          </Link>
                </div>
              </div>
            </div>
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-t-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/721x401" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">The 400 Blows</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                 
                </div>
              </div>
            </div>
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-t-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/722x402" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">Shooting Stars</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
               
                </div>
              </div>
            </div>
         
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-t-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/720x400" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              
                </div>
              </div>
            </div>
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-t-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/721x401" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">The 400 Blows</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                
                </div>
              </div>
            </div>
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-t-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/722x402" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">Shooting Stars</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
        <div className="fixed inset-0 overflow-hidden hidden varish">
        <div className="absolute inset-0 overflow-hidden">
          {/*
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    */}
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
          <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
            {/*
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      */}
            <div className="relative w-screen max-w-md">
              {/*
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        */}
              <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                <button className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Close panel</span>
                  {/* Heroicon name: outline/x */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className=" flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div className="px-4 sm:px-6">
                  <h2 id="slide-over-heading" className="text-lg font-bold text-white">
                    Panel title
                  </h2>
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  {/* Replace with your content */}
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div className=" border-dashed border-gray-200" aria-hidden="true" />
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

            </div>
        )
    }
}

export default CourseCatalog
