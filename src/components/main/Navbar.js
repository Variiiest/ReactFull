import React, {Component}from 'react'
import { Link} from 'react-router-dom';
import {Switch,Route } from 'react-router-dom';
import SignUp from '../account/SignUp';
import SignIn from '../account/SignIn';
import Hero from "./Hero";


export class Navbar extends Component {


  constructor (props) {
    super(props);
    this.state= {
      openList1: false,
      openList2: false,
      openList3: false,
    };
  }
  
    setListOpen1(){
    this.setState({openList1: !this.state.openList1,openList2: false,
      openList3: false,});
  }
  setListOpen2(){
    this.setState({openList2: !this.state.openList2,openList1: false,
      openList3: false,});
  }

  setListOpen3(){
    this.setState({openList3: !this.state.openList3,openList1: false,
      openList2: false,});
  }
  render() {
    return (
      <div>
            <div className="relative colorviolet">

<div className="relative colorviolet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="text-2xl font-bold text-indigo-600">
                <span className="sr-only">Logo</span>
                edusolve
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
                <button type="button" className="group  text-gray-300 inline-flex items-center text-base font-bold hover:text-gray-100 focus:outline-none " onClick={()=>this.setListOpen1()}>
                  <span>Solutions</span>
            <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button type="button" className="group  text-gray-300 inline-flex items-center text-base font-bold hover:text-gray-100 focus:outline-none " onClick={()=>this.setListOpen1()}>
                  <span>
                    Enterprise
                  </span>
            <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <a href="/" className="text-base font-bold text-gray-300 hover:text-gray-900">
                Docs
              </a>
              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-300" */}
                <button type="button" className="group text-gray-300 inline-flex items-center text-base font-bold hover:text-gray-100 focus:outline-none" onClick={()=>this.setListOpen2()}>
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
            <Link to="signin" className="whitespace-nowrap text-base font-bold text-gray-700 hover:text-gray-800 px-8 py-3 border-l-2 border-transparent rounded-full shadow-sm text-base font-bold text-white bg-indigo-100 hover:bg-indigo-200">
                Sign in
          </Link>
              <Link to="signup" className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-8 py-3 border-l-2 border-transparent rounded-full shadow-sm text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700">
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
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                <a href="/" className="text-base font-bold text-gray-900 hover:text-gray-700">
                  Pricing
                </a>
                <a href="/" className="text-base font-bold text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                <a href="/" className="text-base font-bold text-gray-900 hover:text-gray-700">
                  Enterprise
                </a>
                <a href="/" className="text-base font-bold text-gray-900 hover:text-gray-700">
                  Blog
                </a>
                <a href="/" className="text-base font-bold text-gray-900 hover:text-gray-700">
                  Help Center
                </a>
                <a href="/" className="text-base font-bold text-gray-900 hover:text-gray-700">
                  Guides
                </a>
                <a href="/" className="text-base font-bold text-gray-900 hover:text-gray-700">
                  Security
                </a>
                <a href="/" className="text-base font-bold text-gray-900 hover:text-gray-700">
                  Events
                </a>
              </div>
              <div>
                <a href="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-bold text-gray-300">
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
      
      <section className={"text-gray-600 body-font bg-white"+( this.state.openList1 ? "" : " hidden")} onMouseLeave={()=>this.setListOpen1()}>
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
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
                <a className="text-gray-600 hover:text-gray-800" href="/">First Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Second Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Third Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Fourth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Fifth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Sixth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Seventh Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Eighth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </section>


      <section className={"text-gray-600 body-font bg-white"+( this.state.openList2 ? "" : " hidden")} onMouseLeave={()=>this.setListOpen2()}>
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidesdgfdfgdfgrmy</h1>
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
                <a className="text-gray-600 hover:text-gray-800" href="/">First Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Second Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Third Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Fourth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Fifth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Sixth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Seventh Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800" href="/">Eighth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </section>
        <Switch>
      <Route exact path='/' component={Hero}/>
      <Route path="signup" component={SignUp}/>
      <Route path="signin" component={SignIn}/>
   </Switch>
      </div>
   
    
      </div>
    )
  }
}

export default Navbar

