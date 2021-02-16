import React from 'react'
import TabsRender from '../blog/Tabs';

export default function Dashboard(fixed) {
  const [NavOpen, setNavOpen] = React.useState(false);
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <aside className={"fixed left-0 right-0 z-10 flex-col flex-shrink-0 h-full overflow-hidden transition-all bg-transparent bottom-10 xl:h-screen top-16 xl:static xl:z-auto" +(NavOpen ? "" : " hidden")}>
          {/* Sidebar div */}
          <div className="flex-shrink-0 hidden px-2 max-h-14 xl:items-center xl:justify-start xl:space-x-3 xl:flex xl:max-h-14 xl:h-full xl:px-4">
          
            <a href="/" className="flex-shrink-0 text-3xl font-bold text-blue-800">
              edusolve
              </a>
          </div>
          <div className={"fixed left-0 flex flex-col flex-1 max-h-screen px-2 overflow-hidden right-3 top-16 bottom-10 xl:static xl:pt-2 xl:pl-4 xl:mb-4"}>
            <div className="flex-1 max-h-full p-2 overflow-y-auto bg-white rounded-md shadow-2xl lg:shadow-md">
              <nav className>
                <ul className="space-y-2">
                  <li className>
                    <button className="flex items-center space-x-2">
                      <span>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </span>
                      <span> Dashboard </span>
                    </button>
                  </li>
                  {/* </template> */}
                </ul>
              </nav>
            </div>
          </div>
        </aside>
        <div className="relative flex flex-col flex-1 h-full max-h-full mx-4">
          {/* Navbar */}
          <div className="sticky top-0 flex items-center flex-shrink-0 w-full h-full bg-opacity-100 bg-blue-50 max-h-14">
        
            <div className="flex items-center justify-between flex-1">
           
                <button className="p-2 text-blue-600 rounded-full hover:bg-blue-200 focus:outline-none" onClick={() => setNavOpen(!NavOpen)}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
              <nav className="relative flex items-center justify-end flex-1 ml-3 lg:justify-start">
                <ul className="items-center justify-center hidden ml-3 space-x-2 lg:flex">
                  <li>
                    <button className="inline-flex items-center focus:oultine-none space-x-2 rounded-md">
                      <span className="text-2xl font-bold text-indigo-400">Academy</span>
                    </button>
                  </li>
                  <li>
                    <button className="inline-flex items-center px-4 py-2 space-x-2 rounded-md hover:bg-blue-100">
                      <span>Apps</span>
                      <span>
                        <svg className="w-3 h-3 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                  </li>
                </ul>
                {/* Right Links */}
                <ul className="flex items-center justify-center ml-auto mr-2 space-x-2 lg:mr-5">
                  {/* Github Link */}
                  <li className="relative">
                    <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: -1 }}>
                      <span className="block w-5 h-5 bg-red-600 rounded-full animate-ping" />
                    </div>
                  </li>
                  {/* Settings Button */}
                  <li>
                    <button className="inline-block p-2 bg-blue-100 rounded-full hover:bg-blue-200">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </li>
                  {/* Notifications Button */}
                  <li>
                    <button className="inline-block p-2 bg-blue-100 rounded-full hover:bg-blue-200">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </button>
                  </li>
                  {/* Avatar Button */}
                  <li>
                    <button className="p-px border-2 border-blue-100 rounded-full w-11 h-11">
                      <img className="block object-cover rounded-full" src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4" alt="Ahmed Kamel" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex flex-col flex-1 max-h-full pl-2 pr-2 rounded-md xl:pr-4 bg-white">
            {/* section Content */}
            <section className="flex-1 pt-2">
    <TabsRender/>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
