import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class CourseDetail extends Component {
    render() {
        return (
            <div>


<div className="text-gray-600 h-screen flex overflow-hidden text-base">
        <div className="jobmain w-20 flex-shrink-0 flex-col hidden sm:flex">
          <div className="h-16 text-blue-500 flex items-center justify-center ">
            <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
              <path fill="currentColor" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.80 02 3.23 312 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16. 0 2 32 3 34 3F C.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
            <button className="h-10 w-12 text-gray-500 font-bold flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </button>
            <button className="h-10 w-12 bgjobcard font-bold flex items-center justify-center bg-blue-100 text-blue-500">
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </button>
            <button className="h-10 w-12 text-gray-500 font-bold flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                <line x1={12} y1={11} x2={12} y2={17} />
                <line x1={9} y1={14} x2={15} y2={14} />
              </svg>
            </button>
            <button className="h-10 w-12 text-gray-500 font-bold flex items-center justify-center">
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
 
          <div className="flex-grow flex overflow-x-hidden">
            <div className="xl:w-72 w-48 flex-shrink-0 bg-gray-800 h-full overflow-y-auto">
              <div className="text-lg text-gray-400 tracking-wider ml-6 mt-5 font-bold">MODULE 1 </div>
             
              <div className="mt-3">
                <button className="font-bold  shadow">
                  <div className="flex  text-base xl:flex-row flex-col items-center font-bold text-white pb-2 mb-2  px-2  py-2 w-full">
                   
                   Syllabus Revive
                  </div>
               
                </button>
                <button className="jobcard p-3 w-full flex flex-col font-bold  shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
                  <div className="flex xl:flex-row flex-col items-center font-bold text-white pb-2 mb-2 xl:-b jobcard w-full">
                   
                    Mert Cukuren
                  </div>
                 
                </button>
                <button className="jobcard p-3 w-full flex flex-col font-bold  shadow">
                  <div className="flex xl:flex-row flex-col items-center font-bold text-white pb-2 mb-2 xl:-b jobcard w-full">
                 
                    Albert Flores
                  </div>
               
                </button>
                <button className="jobcard p-3 w-full flex flex-col font-bold  shadow">
                  <div className="flex xl:flex-row flex-col items-center font-bold text-white pb-2 mb-2 xl:-b jobcard w-full">
               
                    Jane Cooper
                  </div>
            
                </button>
                <button className="jobcard p-3 w-full flex flex-col font-bold  shadow">
                  <div className="flex xl:flex-row flex-col items-center font-bold text-white pb-2 mb-2 xl:-b jobcard w-full">
                  
                    Ronald Richards
                  </div>
                 
                </button>
              </div>
            </div>
            <div className="flex-grow overflow-y-auto jobcard">
              <div className="sm:px-7 pt-4 px-4 pb-4 flex flex-col w-full -b bg-gray-100 sticky top-0">
          
                <div className="flex items-center space-x-3 mt-2">

               
                <a href="#" className="px-3 -b-2 -blue-500 text-blue-500 -white pb-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(3, 20, 210, 1)', transform: '', msFilter: ''}}><path d="M13.061 4.939L10.939 7.061 15.879 12 10.939 16.939 13.061 19.061 20.121 12z" /><path d="M6.061 19.061L13.121 12 6.061 4.939 3.939 7.061 8.879 12 3.939 16.939z" /></svg>
                </a>
                  <a href="#" className="px-3 -b-2 -blue-500 text-blue-500 -white pb-1.5">Video</a>
                  <a href="#" className="px-3 -b-2 -transparent text-gray-600 text-gray-400 pb-1.5">Notes</a>
                  <a href="#" className="px-3 -b-2 -transparent text-gray-600 text-gray-400 pb-1.5 sm:block hidden">Tests</a>
                  <a href="#" className="px-3 -b-2 -transparent text-gray-600 text-gray-400 pb-1.5 sm:block hidden">Forum</a>
                  <a href="#" className="px-3 -b-2 -transparent text-gray-600 text-gray-400 pb-1.5 sm:block hidden">Quizzes</a>
                </div>
              </div>
             
              <div className="max-w-full mx-6 my-4 jobcard rounded-xl shadow-md overflow-hidden ">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random" alt="Man looking at item at a store" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-base text-indigo-500 font-semibold">Case study</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-bold text-black hover:underline">Finding customers for your new business</a>
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
