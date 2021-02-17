import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default function Navbar(fixed) {
 
      const [listOpen1, setListOpen1] = React.useState(false);
        return (
            <div>
                 <div className="relative colorviolet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Workflow</span>
                edusolve
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-300" */}
                <button type="button" className="group bg-white rounded-md text-gray-300 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setListOpen1(!listOpen1)}>
                  <span>Solutions</span>
                  {/*
              Heroicon name: solid/chevron-down

              Item active: "text-gray-100", Item inactive: "text-gray-400"
            */}
                  <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {/*
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          */}
               
              </div>
              <a href="/" className="text-base font-medium text-gray-300 hover:text-gray-900">
                Pricing
              </a>
              <a href="/" className="text-base font-medium text-gray-300 hover:text-gray-900">
                Docs
              </a>
              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-300" */}
                <button type="button" className="group bg-white rounded-md text-gray-300 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span>More</span>
                  {/*
              Heroicon name: solid/chevron-down

              Item active: "text-gray-100", Item inactive: "text-gray-400"
            */}
                  <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {/*
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          */}
            
              </div>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link to="signin" className="whitespace-nowrap text-base font-medium text-gray-700 hover:text-gray-800 px-8 py-3 border-l-2 border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-100 hover:bg-indigo-200">
                Sign in
          </Link>
              <Link to="signup" className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-8 py-3 border-l-2 border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
          </Link>
            </div>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
         
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Enterprise
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Help Center
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Guides
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Security
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Events
                </a>
              </div>
              <div>
                <a href="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-300">
                  Existing customer?
                  <a href="/" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className={"text-gray-600 body-font"+(listOpen1 ? "" : " hidden")}>
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
            <p className="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
            <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">CATEGORIES</h2>
            <nav className="flex flex-wrap list-none -mb-1">
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Fifth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Sixth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Seventh Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Eighth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </section>


      
      <section className="text-gray-100 body-font coloracad">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline ">Data to enrich your</span>
                  <span className="block xl:inline">online business</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white colorviolet hover:bg-indigo-900 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Live demo
                    </a>
                  </div>
                </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>
     


      <section className="w-full bg-gray-200 pt-7 pb-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          {/* Image */}
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " alt=""/>
          </div>
          {/* Content */}
          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Boost Productivity
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Build an atmosphere that creates productivity in your organization and your company culture.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Speed past your competition
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Learn the top techniques
              </li>
            </ul>
          </div>
          {/* End  Content */}
        </div>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          {/* Content */}
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Automated Tasks
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Save time and money with our revolutionary services. We are the leaders in the industry.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Automated task management workflow
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Detailed analytics for your data
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Some awesome integrations
              </li>
            </ul>
          </div>
          {/* End  Content */}
          {/* Image */}
          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="https://cdn.devdojo.com/images/december2020/settings.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" alt=""/>
          </div>
        </div>
      </section>
      




      <div className="flex items-center justify-center py-20 colorviolet min-w-screen">
        <div className="px-16 colorviolet">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>
            <h2 className="relative mt-2 flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center text-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                </path>
              </svg>
              See what others are saying</h2>
            <div className="block w-full h-1 max-w-lg mt-6 bg-purple-100 rounded-full" />
            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
              <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80" className="object-cover w-full h-full" alt=""/>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-300">John Doe</h4>
                    <p className="text-gray-100">CEO of Something</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-300">"This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"</blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-300">Jane Doe</h4>
                    <p className="text-gray-100">CTO of Business</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-300">"Thanks for creating this service. My life is so much
                  easier.
                  Thanks for making such a great product."</blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-300">John Smith</h4>
                    <p className="text-gray-100">Creator of Stuff</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-300">"Packed with awesome content and exactly what I was
                  looking
                  for. I would highly recommend this to anyone."</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font coloracad">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-300">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-300">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-300">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="text-gray-400 colorviolet body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              
              <span className="ml-3 text-xl">dsfsdfdf</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>


      </div>

      
        )
    }


