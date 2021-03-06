import React, {Component}from 'react'
import { Link} from 'react-router-dom';
import {Switch,Route } from 'react-router-dom';
import SignUp from '../account/SignUp';
import SignIn from '../account/SignIn';

import Hero from './Hero'
import CoursePage from '../academy/CoursePage';
import CourseCatalog from '../academy/CourseCatalog';
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="text-2xl font-bold text-pink-600">
                <span className="sr-only">Logo</span>
                .edusolve
              </Link>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <button className="p-2 inline-flex items-center justify-end text-white hover:text-gray-300  focus:outline-none " onClick={()=>this.setListOpen3()}>
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav className="hidden lg:flex space-x-10">
              <div className="relative">
                <button type="button" className="group  text-gray-300 inline-flex items-center text-base font-bold hover:text-gray-100 focus:outline-none " onClick={()=>this.setListOpen1()}>
                  <span>Products</span>
            <svg className="ml-2 h-5 w-5 text-white group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button type="button" className="group  text-gray-300 inline-flex items-center text-base font-bold hover:text-gray-100 focus:outline-none " onClick={()=>this.setListOpen1()}>
                  <span>
                    Enterprise
                  </span>
            <svg className="ml-2 h-5 w-5 text-white group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <Link to="/pricing" className="text-base font-bold text-gray-300 hover:text-gray-100">
                Pricing
              </Link>
              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-300" */}
                <button type="button" className="group text-gray-300 inline-flex items-center text-base font-bold hover:text-gray-100 focus:outline-none" onClick={()=>this.setListOpen2()}>
                  <span>More</span>
                  {/*
              Heroicon name: solid/chevron-down

              Item active: "text-gray-100", Item inactive: "text-white"
            */}
                  <svg className="ml-2 h-5 w-5 text-white group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
          
            
              </div>
            </nav>
            <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
            <Link to="signin" className="whitespace-nowrap text-base font-bold text-gray-700 hover:text-gray-800 px-8 py-2 border-l-2 border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-white hover:bg-">
                Sign in
          </Link>
              <Link to="signup" className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border-l-2 border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
          </Link>
            </div>
          </div>
        </div>
 
        <div className={"absolute top-0 inset-x-0 p-2 transition transform origin-top-right"+ ( this.state.openList3 ? "" : " hidden")}>
          <div className="rounded-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={()=>this.setListOpen3()}>
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
            <a className="text-indigo-500 inline-flex items-center mt-4" href="/">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
           
          <div className="flex flex-wrap -m-4 mb-4">
            <div className="xl:w-1/3 md:w-1/2 p-2 text-center">
              <div className="p-6   ">
                
                <h2 className="text-3xl text-pink-500 tracking-wider font-semibold title-font mb-2 acadfont">
                  <Link to="/academy"><span className="text-pink-300"> A</span>
                
                cademy </Link> </h2>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 text-center">
              <div className="p-6   ">
            
                <h2 className="text-3xl text-yellow-500 font-semibold title-font mb-2 jobfont">findjob</h2>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 text-center">
              <div className="p-6   ">
               
                <h2 className="text-3xl text-indigo-500 font-bold title-font mb-2">
                  forumQ
                </h2>
            
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 text-center">
              <div className="p-6 ">
                
                <h2 className="text-3xl text-green-400 font-semibold title-font mb-2">Commune</h2>
               
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 text-center">
              <div className="p-6  storefont ">
            
                <h2 className="text-3xl text-blue-300 italic font-bold title-font mb-2">Store</h2>
              
              </div>
            </div>
          </div>
     
          </div>
        </div>
      </section>


      <section className={"text-gray-600 body-font bg-white"+( this.state.openList2 ? "" : " hidden")} onMouseLeave={()=>this.setListOpen2()}>
      <div className="container px-5 py-24 mx-auto">
   
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a className="text-indigo-500 inline-flex items-center" href="/">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a className="text-indigo-500 inline-flex items-center" href="/">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a href="/" className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a  href="/" className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </section>
        <Switch>
      <Route exact path='/' component={Hero}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/academy" component={CourseCatalog}/>
      <Route path="/course" component={CoursePage}/>
   </Switch>
    
    
      </div>
    )
  }
}

export default Navbar

