import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Switch,Route } from 'react-router-dom';
import SignUp from '../account/SignUp';
import SignIn from '../account/SignIn';
import Hero from "../main/Hero";

class CourseCatalog extends Component {

  
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

<div className="relative ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="text-2xl font-bold text-pink-600 sm:ml-12">
                <span className="sr-only">Logo</span>
                edusolve
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button className="p-2 inline-flex items-center justify-center text-white hover:text-gray-300  focus:outline-none " onClick={()=>this.setListOpen3()}>
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
                {/* Item active: "text-white", Item inactive: "text-gray-300" */}
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
            <Link to="signin" className="whitespace-nowrap text-base font-bold text-gray-700 hover:text-gray-800 px-8 py-3 border-l-2 border-transparent rounded-full shadow-sm text-base font-bold text-white bg-white hover:bg-">
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
        <div className={"absolute top-0 inset-x-0 p-2 transition transform origin-top-right"+ ( this.state.openList3 ? "" : " hidden")}>
          <div className="border-gray-100 border-l-2 rounded-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
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
                <a href="/" className="text-base font-bold text-white hover:text-gray-700">
                  Pricing
                </a>
                <a href="/" className="text-base font-bold text-white hover:text-gray-700">
                  Docs
                </a>
                <a href="/" className="text-base font-bold text-white hover:text-gray-700">
                  Enterprise
                </a>
                <a href="/" className="text-base font-bold text-white hover:text-gray-700">
                  Blog
                </a>
                <a href="/" className="text-base font-bold text-white hover:text-gray-700">
                  Help Center
                </a>
                <a href="/" className="text-base font-bold text-white hover:text-gray-700">
                  Guides
                </a>
                <a href="/" className="text-base font-bold text-white hover:text-gray-700">
                  Security
                </a>
                <a href="/" className="text-base font-bold text-white hover:text-gray-700">
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
      
      <section className={"text-white body-font bg-white"+( this.state.openList1 ? "" : " hidden")} onMouseLeave={()=>this.setListOpen1()}>
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">Pitchfork Kickstarter Taxidermy</h1>
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
                  <Link to="course"><span className="text-pink-300"> A</span>
                
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


      <section className={"text-white body-font bg-white"+( this.state.openList2 ? "" : " hidden")} onMouseLeave={()=>this.setListOpen2()}>
      <div className="container px-5 py-24 mx-auto">
   
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Shooting Stars</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a className="text-indigo-500 inline-flex items-center" href="/">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">The Catalyzer</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a className="text-indigo-500 inline-flex items-center" href="/">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Neptune</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a href="/" className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Melanchole</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a href="/" className="text-indigo-500 inline-flex items-center">Learn More
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
      <Route exact path="signup" component={SignUp}/>
      <Route exact path="signin" component={SignIn}/>
   </Switch>
      </div>
   


<div className="bg-indigo-600 static bottom-0">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 border-gray-100 border-l-2 rounded-lg bg-indigo-800">
                {/* Heroicon name: outline/speakerphone */}
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </span>
              <p className="ml-3 font-bold text-white truncate">
                <span className="md:hidden">
                  We announced a new product!
                </span>
                <span className="hidden md:inline">
                  Big news! We're excited to announce a brand new product.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <Link to="coursedetail" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-indigo-600 bg-white hover:bg-indigo-50">
                Learn more
              </Link>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                <span className="sr-only">Dismiss</span>
                {/* Heroicon name: outline/x */}
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>



              
      <section className="text-white body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-nowrap -m-4 overflow-y-auto scroll-hidden">
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-l-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/720x400" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                 
                </div>
              </div>
            </div>
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-l-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/721x401" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">The 400 Blows</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                 
                </div>
              </div>
            </div>
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-l-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/722x402" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">Shooting Stars</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
               
                </div>
              </div>
            </div>
         
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-l-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/720x400" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              
                </div>
              </div>
            </div>
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-l-2 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random/721x401" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">The 400 Blows</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                
                </div>
              </div>
            </div>
            <div className="w-64 m-4">
              <div className=" jobcard m-4 w-64 border-opacity-60 border-gray-100 border-l-2 rounded-lg overflow-hidden">
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
