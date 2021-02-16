import React from 'react'
import { Link} from 'react-router-dom';
import {Switch,Route } from 'react-router-dom';
import SignUp from '../account/SignUp';
import SignIn from '../account/SignIn';
import Hero from "./Hero";
export default function Navbar(fixed) {
  const [listOpen3, setListOpen3] = React.useState(false);
  return (
      <div className="relative colorviolet">
        <div className="max-w-7xl mx-2 px-f4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to='/'>
                <span className="sr-only">Logo</span>
                <span className="text-2xl font-bold text-green-500">edusolve</span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button type="button" className="rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:text-gray-500 focus:outline-none " onClick={() => setListOpen3(!listOpen3)}>
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link to="signin" className="whitespace-nowrap text-base font-medium text-gray-700 hover:text-gray-800 px-8 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-100 hover:bg-indigo-200">
                Sign in
          </Link>
              <Link to="signup" className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
          </Link>
            </div>
          </div>
        </div>
 
        <div className={"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" + (listOpen3 ? "" : " hidden")}>
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-900 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                <svg width={154} height={24} className="h-6 w-auto sm:h-8" viewBox="0 0 154 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.846 25.612C8.25933 25.612 6.888 25.34 5.732 24.796C4.576 24.252 3.63533 23.538 2.91 22.654C2.18467 21.7473 1.64067 20.7387 1.278 19.628C0.938 18.5173 0.768 17.384 0.768 16.228V15.616C0.768 14.4373 0.938 13.2927 1.278 12.182C1.64067 11.0713 2.18467 10.074 2.91 9.19C3.63533 8.28333 4.55333 7.56933 5.664 7.048C6.79733 6.504 8.12333 6.232 9.642 6.232C11.614 6.232 13.2347 6.66267 14.504 7.524C15.796 8.36267 16.748 9.45067 17.36 10.788C17.9947 12.1253 18.312 13.5533 18.312 15.072V16.534H3.896C4.00933 18.3247 4.542 19.8093 5.494 20.988C6.446 22.1667 7.89667 22.756 9.846 22.756C11.274 22.756 12.43 22.4387 13.314 21.804C14.2207 21.1693 14.7647 20.4327 14.946 19.594H18.006C17.6207 21.4753 16.7027 22.9487 15.252 24.014C13.8013 25.0793 11.9993 25.612 9.846 25.612ZM9.642 9.088C8.01 9.088 6.72933 9.55267 5.8 10.482C4.87067 11.3887 4.28133 12.59 4.032 14.086H15.116C14.912 12.5447 14.3567 11.332 13.45 10.448C12.5433 9.54133 11.274 9.088 9.642 9.088ZM30.5284 25.612C28.8057 25.612 27.2644 25.1927 25.9044 24.354C24.567 23.5153 23.513 22.3933 22.7424 20.988C21.9717 19.56 21.5864 17.9733 21.5864 16.228V15.616C21.5864 13.8933 21.9604 12.3293 22.7084 10.924C23.4564 9.496 24.4877 8.36267 25.8024 7.524C27.1397 6.66267 28.681 6.232 30.4264 6.232C31.7637 6.232 32.9877 6.504 34.0984 7.048C35.2317 7.592 36.1497 8.442 36.8524 9.598V0.179999H40.1164V25H37.5324V21.26C36.8297 22.8013 35.8437 23.912 34.5744 24.592C33.3277 25.272 31.979 25.612 30.5284 25.612ZM30.9704 22.756C32.081 22.756 33.0897 22.5067 33.9964 22.008C34.903 21.5093 35.6284 20.7953 36.1724 19.866C36.7164 18.914 36.9884 17.8033 36.9884 16.534V14.97C36.9884 13.7233 36.705 12.6693 36.1384 11.808C35.5944 10.924 34.8577 10.2553 33.9284 9.802C33.0217 9.326 32.0244 9.088 30.9364 9.088C29.123 9.088 27.6497 9.71133 26.5164 10.958C25.4057 12.2047 24.8504 13.8593 24.8504 15.922C24.8504 17.3047 25.111 18.5173 25.6324 19.56C26.1537 20.58 26.879 21.3733 27.8084 21.94C28.7377 22.484 29.7917 22.756 30.9704 22.756ZM52.6778 25.544C50.5244 25.544 48.8698 24.8413 47.7138 23.436C46.5578 22.0307 45.9798 20.002 45.9798 17.35V6.81H49.2438V17.996C49.2438 19.424 49.6291 20.546 50.3998 21.362C51.1704 22.1553 52.2131 22.552 53.5278 22.552C54.8878 22.552 55.9984 22.1213 56.8598 21.26C57.7211 20.376 58.1518 19.1747 58.1518 17.656V6.81H61.4158V25H58.8318V20.818C58.4238 22.3593 57.7211 23.538 56.7238 24.354C55.7264 25.1473 54.4231 25.544 52.8138 25.544H52.6778ZM73.6874 25.544C71.3074 25.544 69.46 25.034 68.1454 24.014C66.8534 22.994 66.1847 21.6 66.1394 19.832H69.1994C69.2447 20.5347 69.596 21.2033 70.2534 21.838C70.9334 22.45 72.078 22.756 73.6874 22.756C75.138 22.756 76.2487 22.4727 77.0194 21.906C77.79 21.3167 78.1754 20.6027 78.1754 19.764C78.1754 19.016 77.892 18.438 77.3254 18.03C76.7587 17.5993 75.8407 17.316 74.5714 17.18L72.5994 16.976C70.8767 16.7947 69.4714 16.2847 68.3834 15.446C67.2954 14.5847 66.7514 13.3833 66.7514 11.842C66.7514 10.0967 67.3974 8.73667 68.6894 7.762C69.9814 6.78733 71.6474 6.3 73.6874 6.3C75.7274 6.3 77.382 6.75333 78.6514 7.66C79.9207 8.56667 80.578 9.91533 80.6234 11.706H77.5634C77.5407 10.9807 77.2007 10.3687 76.5434 9.87C75.9087 9.34867 74.9567 9.088 73.6874 9.088C72.418 9.088 71.4547 9.34867 70.7974 9.87C70.14 10.3913 69.8114 11.0487 69.8114 11.842C69.8114 12.522 70.038 13.066 70.4914 13.474C70.9674 13.882 71.738 14.1427 72.8034 14.256L74.7754 14.46C76.7247 14.664 78.2887 15.208 79.4674 16.092C80.646 16.9533 81.2354 18.1773 81.2354 19.764C81.2354 20.8973 80.9067 21.906 80.2494 22.79C79.6147 23.6513 78.7307 24.3313 77.5974 24.83C76.464 25.306 75.1607 25.544 73.6874 25.544ZM94.3299 25.612C92.7432 25.612 91.3492 25.34 90.1479 24.796C88.9466 24.252 87.9266 23.538 87.0879 22.654C86.2719 21.7473 85.6486 20.7387 85.2179 19.628C84.8099 18.5173 84.6059 17.384 84.6059 16.228V15.616C84.6059 14.46 84.8212 13.3267 85.2519 12.216C85.6826 11.0827 86.3172 10.074 87.1559 9.19C87.9946 8.28333 89.0146 7.56933 90.2159 7.048C91.4172 6.504 92.7886 6.232 94.3299 6.232C95.8712 6.232 97.2426 6.504 98.4439 7.048C99.6452 7.56933 100.665 8.28333 101.504 9.19C102.343 10.074 102.977 11.0827 103.408 12.216C103.839 13.3267 104.054 14.46 104.054 15.616V16.228C104.054 17.384 103.839 18.5173 103.408 19.628C103 20.7387 102.377 21.7473 101.538 22.654C100.722 23.538 99.7132 24.252 98.5119 24.796C97.3106 25.34 95.9166 25.612 94.3299 25.612ZM94.3299 22.688C95.6899 22.688 96.8459 22.3933 97.7979 21.804C98.7726 21.192 99.5092 20.376 100.008 19.356C100.529 18.336 100.79 17.1913 100.79 15.922C100.79 14.63 100.529 13.474 100.008 12.454C99.4866 11.434 98.7386 10.6293 97.7639 10.04C96.8119 9.45067 95.6672 9.156 94.3299 9.156C93.0152 9.156 91.8706 9.45067 90.8959 10.04C89.9212 10.6293 89.1732 11.434 88.6519 12.454C88.1306 13.474 87.8699 14.63 87.8699 15.922C87.8699 17.1913 88.1192 18.336 88.6179 19.356C89.1392 20.376 89.8759 21.192 90.8279 21.804C91.8026 22.3933 92.9699 22.688 94.3299 22.688ZM109.146 25V2.764H106.63V0.179999H112.41V25H109.146ZM122.547 25L116.359 6.844H119.759L124.961 22.416H125.675L130.197 6.844H133.393L128.021 25H122.547ZM145.049 25.612C143.462 25.612 142.091 25.34 140.935 24.796C139.779 24.252 138.838 23.538 138.113 22.654C137.388 21.7473 136.844 20.7387 136.481 19.628C136.141 18.5173 135.971 17.384 135.971 16.228V15.616C135.971 14.4373 136.141 13.2927 136.481 12.182C136.844 11.0713 137.388 10.074 138.113 9.19C138.838 8.28333 139.756 7.56933 140.867 7.048C142 6.504 143.326 6.232 144.845 6.232C146.817 6.232 148.438 6.66267 149.707 7.524C150.999 8.36267 151.951 9.45067 152.563 10.788C153.198 12.1253 153.515 13.5533 153.515 15.072V16.534H139.099C139.212 18.3247 139.745 19.8093 140.697 20.988C141.649 22.1667 143.1 22.756 145.049 22.756C146.477 22.756 147.633 22.4387 148.517 21.804C149.424 21.1693 149.968 20.4327 150.149 19.594H153.209C152.824 21.4753 151.906 22.9487 150.455 24.014C149.004 25.0793 147.202 25.612 145.049 25.612ZM144.845 9.088C143.213 9.088 141.932 9.55267 141.003 10.482C140.074 11.3887 139.484 12.59 139.235 14.086H150.319C150.115 12.5447 149.56 11.332 148.653 10.448C147.746 9.54133 146.477 9.088 144.845 9.088Z" fill="#03E1FF" />
                </svg>
                </div>
                <div className="-mr-2">
                  <button type="button" className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => setListOpen3(!listOpen3)}>
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="/goood" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                    {/* Heroicon name: outline/chart-bar */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-100">
                      Analytics
                </span>
                  </a>
                  <a href="/goood" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                    {/* Heroicon name: outline/cursor-click */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-100">
                      Engagement
                </span>
                  </a>
                  <a href="/goood" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                    {/* Heroicon name: outline/shield-check */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-100">
                      Security
                </span>
                  </a>
                  <a href="/goood" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                    {/* Heroicon name: outline/view-grid */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-100">
                      Integrations
                </span>
                  </a>
                  <a href="/goood" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                    {/* Heroicon name: outline/refresh */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-100">
                      Automations
                </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="/goood" className="text-base font-medium text-gray-100 hover:text-gray-700">
                  Pricing
            </a>
                <a href="/goood" className="text-base font-medium text-gray-100 hover:text-gray-700">
                  Docs
            </a>
                <a href="/goood" className="text-base font-medium text-gray-100 hover:text-gray-700">
                  Enterprise
            </a>
                <a href="/goood" className="text-base font-medium text-gray-100 hover:text-gray-700">
                  Blog
            </a>
                <a href="/goood" className="text-base font-medium text-gray-100 hover:text-gray-700">
                  Help Center
            </a>
                <a href="/goood" className="text-base font-medium text-gray-100 hover:text-gray-700">
                  Guides
            </a>
                <a href="/goood" className="text-base font-medium text-gray-100 hover:text-gray-700">
                  Security
            </a>
                <a href="/goood" className="text-base font-medium text-gray-100 hover:text-gray-700">
                  Events
            </a>
              </div>
              <div>
                <a href="/goood" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
            </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
              <a href="/goood" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
              </a>
                </p>
              </div>
            </div>
          </div>
        </div>
     
        <Switch>
      <Route exact path='/' component={Hero}/>
      <Route path="signup" component={SignUp}/>
      <Route path="signin" component={SignIn}/>
   </Switch>
      </div>
   
    
  )

}
