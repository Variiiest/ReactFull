import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class CourseDetail extends Component {
    render() {
        return (
            <div>


<div className="text-gray-600 h-screen flex overflow-hidden text-sm">
        <div className="bg-white  -gray-800 w-20 flex-shrink-0 -r -gray-200 flex-col hidden sm:flex">
          <div className="h-16 text-blue-500 flex items-center justify-center">
            <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
              <path fill="currentColor" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
            <button className="h-10 w-12 text-gray-500 rounded-md flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </button>
            <button className="h-10 w-12 bg-gray-700 rounded-md flex items-center justify-center bg-blue-100 text-blue-500">
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </button>
            <button className="h-10 w-12 text-gray-500 rounded-md flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                <line x1={12} y1={11} x2={12} y2={17} />
                <line x1={9} y1={14} x2={15} y2={14} />
              </svg>
            </button>
            <button className="h-10 w-12 text-gray-500 rounded-md flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x={3} y={3} width={7} height={7} />
                <rect x={14} y={3} width={7} height={7} />
                <rect x={14} y={14} width={7} height={7} />
                <rect x={3} y={14} width={7} height={7} />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-grow overflow-hidden h-full flex flex-col">
 
          <div className="flex-grow flex overflow-x-hidden scroll-hid">
            <div className="xl:w-72 w-48 flex-shrink-0 -r -gray-200 -gray-800 h-full overflow-y-auto lg:block hidden p-5">
              <div className="text-xs text-gray-400 tracking-wider">MODULE 1 </div>
              <div className="relative mt-2">
                <input type="text" className="pl-8 h-9 bg-transparent  -gray-300 -gray-700 w-full rounded-md text-sm" placeholder="Search" />
                <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx={11} cy={11} r={8} />
                  <line x1={21} y1={21} x2="16.65" y2="16.65" />
                </svg>
              </div>
              <div className="space-y-4 mt-3">
                <button className="bg-white p-3 w-full flex flex-col rounded-md  shadow">
                  <div className="flex  text-xl xl:flex-row flex-col items-center font-medium text-gray-900 pb-2 mb-2 xl:-b -gray-200 -opacity-75 -gray-700 w-full">
                   
                   Syllabus Revive
                  </div>
               
                </button>
                <button className="bg-white p-3 w-full flex flex-col rounded-md  shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
                  <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 pb-2 mb-2 xl:-b -gray-200 -opacity-75 -gray-700 w-full">
                   
                    Mert Cukuren
                  </div>
                 
                </button>
                <button className="bg-white p-3 w-full flex flex-col rounded-md  shadow">
                  <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 pb-2 mb-2 xl:-b -gray-200 -opacity-75 -gray-700 w-full">
                 
                    Albert Flores
                  </div>
               
                </button>
                <button className="bg-white p-3 w-full flex flex-col rounded-md  shadow">
                  <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 pb-2 mb-2 xl:-b -gray-200 -opacity-75 -gray-700 w-full">
               
                    Jane Cooper
                  </div>
            
                </button>
                <button className="bg-white p-3 w-full flex flex-col rounded-md  shadow">
                  <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 pb-2 mb-2 xl:-b -gray-200 -opacity-75 -gray-700 w-full">
                  
                    Ronald Richards
                  </div>
                 
                </button>
              </div>
            </div>
            <div className="flex-grow bg-white  overflow-y-auto">
              <div className="sm:px-7 sm:pt-7 px-4 flex flex-col w-full -b -gray-200 bg-white  -gray-800 sticky top-0">
          
                <div className="flex items-center space-x-3 mt-2">
                  <a href="#" className="px-3 -b-2 -blue-500 text-blue-500 -white pb-1.5">Video</a>
                  <a href="#" className="px-3 -b-2 -transparent text-gray-600 text-gray-400 pb-1.5">Notes</a>
                  <a href="#" className="px-3 -b-2 -transparent text-gray-600 text-gray-400 pb-1.5 sm:block hidden">Tests</a>
                  <a href="#" className="px-3 -b-2 -transparent text-gray-600 text-gray-400 pb-1.5 sm:block hidden">Forum</a>
                  <a href="#" className="px-3 -b-2 -transparent text-gray-600 text-gray-400 pb-1.5 sm:block hidden">Quizzes</a>
                </div>
              </div>
             
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
            <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
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

export default CourseDetail
