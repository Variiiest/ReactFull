import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class BlogHeader extends Component {
    render() {
        return (
            <div>
                  
        <nav className="colorviolet shadow-2xl">
          <div className="container px-6 py-3 mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <a  href="/" className="text-xl font-bold text-indigo-700 dark:text-white md:text-2xl hover:hover:text-gray-300" >edusolve-blog</a>
                  {/* Search input on desktop screen */}
                  <div className="hidden mx-10 md:block">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-100  border-l-2 border-gray-300 rounded-full focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search" />
                    </div>
                  </div>
                </div>
                {/* Mobile menu button */}
                <div className="flex md:hidden">
                  <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-white dark:hover:text-gray-400 focus:outline-none focus:text-white dark:focus:text-gray-400" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Mobile Menu open: "block", Menu closed: "hidden" */}
              <div className="items-center md:flex">
                <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                  <a  href="/" className="my-1 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:mx-4 md:my-0" >Home</a>
                  <a  href="/" className="my-1 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:mx-4 md:my-0" >Blog</a>
                  <a  href="/" className="my-1 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:mx-4 md:my-0" >Compoents</a>
                  <a  href="/" className="my-1 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:mx-4 md:my-0" >Courses</a>
                </div>
                <div className="flex items-center py-2 -mx-1 md:mx-0">
                <Link to="signin" className="whitespace-nowrap text-base font-medium text-gray-700 hover:text-gray-800 px-8 py-3 border-l-2 border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-100 hover:bg-indigo-200">
                Sign in
          </Link>
              <Link to="signup" className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-8 py-3 border-l-2 border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
          </Link>
                </div>
                {/* Search input on mobile screen */}
                <div className="mt-3 md:hidden">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <input type="text" className="w-full py-2 pl-10 pr-4   border-l-2 border-gray-300  text-gray-300 border-gray-600 focus:border-blue-500 focus:border-blue-500 focus:outline-none rounded-full" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >News</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Articles</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Videos</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Tricks</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >PHP</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Laravel</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Vue</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >React</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Tailwindcss</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Meraki UI</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >CPP</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >JavaScript</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Ruby</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Mysql</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Pest</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >PHPUnit</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Netlify</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >VS Code</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >PHPStorm</a>
              <a  href="/" className="mx-4 text-base leading-5 text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400  md:my-0" >Sublime</a>
            </div>
          
          </div>
        </nav>
     
            
                
            </div>
        )
    }
}

export default BlogHeader
