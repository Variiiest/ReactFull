import React, { Component } from 'react';

import BlogFooter from './BlogFooter';
import BlogHeader from './BlogHeader';


class BlogPosts extends Component {


  constructor (props) {
    super(props);
    this.state= {
      openNav: false,
    };
  }
  
    setNav(){
    this.setState({openNav: !this.state.openNav});
  }
    render() {
        return (
            <div className="font-semibold colorviolet">




<section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-4 rounded-md md:flex-row flex-col items-center bg-white">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
            
            <figure className="visible">
          
                            <div className="relative bg-white">
                                <div className="pt-20 px-6 sm:px-12">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
                                    <p className="text-gray-600 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                                    <p className="text-gray-600 text-base pb-8">We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center pb-12">
                                            <div className="h-12 w-12">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                                            </div>
                                            <p className="text-gray-600 font-bold ml-3">
                                                Jane Doe <br />
                                                <span className="text-gray-600 text-base font-light">Apple Inc</span>
                                            </p>
                                        </div>
                              
                                    </div>
                                </div>
                            </div>
                        </figure>
        
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>




      <section className="text-gray-600 body-font pt-5">
        <div className="container -ml-5 mr-5 slider">
          <div className="flex flex-nowrap overflow-y-auto scroll-hidden slide-track">
            <div className="m-4 slide">
            <div className="h-full  border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <figure className="visible">
          
                            <div className="relative bg-white">
                                <div className="pt-2 px-2 sm:px-4">
                                <h1 className="title-font sm:text-2xl text-2xl mb-4 font-bold text-gray-900">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
                                    <p className="text-gray-600 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center pb-4">
                                            <div className="h-12 w-12">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                                            </div>
                                            <p className="text-gray-600 font-bold ml-3">
                                                Jane Doe <br />
                                                <span className="text-gray-600 text-base font-light">Apple Inc</span>
                                            </p>
                                        </div>
                              
                                    </div>
                                </div>
                            </div>
                        </figure>
              </div>
            </div>
            <div className="m-4 slide">
              <div className="h-full  w-96 -ml-4 border-opacity-60 rounded-lg overflow-hidden">
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
            <div className="m-4 slide">
              <div className="h-full  w-96 -ml-4 border-opacity-60 rounded-lg overflow-hidden">
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
         
            <div className="m-4 slide">
              <div className="h-full  w-96 -ml-4 border-opacity-60 rounded-lg overflow-hidden">
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
            <div className="m-4 slide">
              <div className="h-full  w-96 -ml-4 border-opacity-60 rounded-lg overflow-hidden">
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
            <div className="m-4 slide">
              <div className="h-full  w-96 -ml-4 border-opacity-60 rounded-lg overflow-hidden">
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











 <section className="text-gray-600 body-font">
        <div className="container px-2 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full  border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <figure className="visible">
          
                            <div className="relative bg-white">
                                <div className="pt-2 px-2 sm:px-4">
                                <h1 className="title-font sm:text-2xl text-2xl mb-4 font-bold text-gray-900">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
                                    <p className="text-gray-600 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center pb-4">
                                            <div className="h-12 w-12">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                                            </div>
                                            <p className="text-gray-600 font-bold ml-3">
                                                Jane Doe <br />
                                                <span className="text-gray-600 text-base font-light">Apple Inc</span>
                                            </p>
                                        </div>
                              
                                    </div>
                                </div>
                            </div>
                        </figure>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full  border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
                <figure className="visible">
          
          <div className="relative bg-white">
              <div className="pt-2 px-2 sm:px-4">
              <h1 className="title-font sm:text-2xl text-2xl mb-4 font-bold text-gray-900">Before they sold out
<br className="hidden lg:inline-block" />readymade gluten
</h1>
                  <p className="text-gray-600 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                  <div className="flex items-center justify-between">
                      <div className="flex items-center pb-4">
                          <div className="h-12 w-12">
                              <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                          </div>
                          <p className="text-gray-600 font-bold ml-3">
                              Jane Doe <br />
                              <span className="text-gray-600 text-base font-light">Apple Inc</span>
                          </p>
                      </div>
            
                  </div>
              </div>
          </div>
      </figure>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full  border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
                <figure className="visible">
          
          <div className="relative bg-white">
              <div className="pt-2 px-2 sm:px-4">
              <h1 className="title-font sm:text-2xl text-2xl mb-4 font-bold text-gray-900">Before they sold out
<br className="hidden lg:inline-block" />readymade gluten
</h1>
                  <p className="text-gray-600 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                  <div className="flex items-center justify-between">
                      <div className="flex items-center pb-4">
                          <div className="h-12 w-12">
                              <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                          </div>
                          <p className="text-gray-600 font-bold ml-3">
                              Jane Doe <br />
                              <span className="text-gray-600 text-base font-light">Apple Inc</span>
                          </p>
                      </div>
            
                  </div>
              </div>
          </div>
      </figure>
              </div>
            </div>
          </div>
        </div>
      </section>  
<div>
<section className="text-gray-200 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">



              
              <div className="h-full rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/600x400/1144c2/fff" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-semibold text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-semibold text-gray-100 mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 " href="/detail">Learn More
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
          <div className="-my-8">
            <div className="py-8 px-4 flex flex-wrap md:flex-nowrap">
           
              <div className="md:flex-grow">
                <h2 className="text-xl font-semibold text-gray-100 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. </p>
                <a className="text-indigo-500 inline-flex items-center mt-4 " href="/detail">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 px-4 flex flex-wrap md:flex-nowrap">
           
              <div className="md:flex-grow">
                <h2 className="text-xl font-semibold text-gray-100 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. </p>
                <a className="text-indigo-500 inline-flex items-center mt-4 " href="/detail">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
        
          </div>
        </div>

            <div className="p-4 md:w-1/3 hidden sm:block">
                   
        
            <div className="flex flex-wrap -m-4 mb-4">
            <div className="xl:w-1/3 md:w-1/2 p-2 ">
              <div className="p-6 bg-gray-100 shadow-lg  ">
                
                <h2 className="text-lg text-gray-800 font-semibold title-font mb-2">Shooting Stars</h2>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 ">
              <div className="p-6 bg-gray-100 shadow-lg  ">
            
                <h2 className="text-lg text-gray-800 font-semibold title-font mb-2">The Catalyzer</h2>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 ">
              <div className="p-6 bg-gray-100 shadow-lg  ">
               
                <h2 className="text-lg text-gray-800 font-semibold title-font mb-2">Neptune Here</h2>
            
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 ">
              <div className="p-6 bg-gray-100 shadow-lg">
                
                <h2 className="text-lg text-gray-800 font-semibold title-font mb-2">Melanchol Set</h2>
               
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 ">
              <div className="p-6 bg-gray-100 shadow-lg  ">
            
                <h2 className="text-lg text-gray-800 font-semibold title-font mb-2">Bunker Dsan</h2>
              
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 ">
              <div className="p-6 bg-gray-100 shadow-lg  ">
                
                <h2 className="text-lg text-gray-800 font-semibold title-font mb-2">Ramona Falls</h2>
              
              </div>
            </div>
          </div>
     
      </div>
         
          
          </div>
        </div>
      </section>


  
      </div>

        <div className="container px-5 py-2 mx-auto flex flex-wrap">
        <div className="md:w-3/5">
        <div className="mt-8 text-gray-100">
            <div className="py-8 px-4 flex flex-wrap md:flex-nowrap">
           
              <div className="md:flex-grow">
                <h2 className="text-xl font-semibold text-gray-100 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. </p>
                <a className="text-indigo-500 inline-flex items-center mt-4 " href="/detail">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 px-4 flex flex-wrap md:flex-nowrap">
           
              <div className="md:flex-grow">
                <h2 className="text-xl font-semibold text-gray-100 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. </p>
                <a className="text-indigo-500 inline-flex items-center mt-4 " href="/detail">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
        
          </div>
       

      
          </div>
      
         
          <div className="text-lg text-gray-100 font-semibold title-font mb-2 md:w-2/5">
   
     
      </div>

  

        </div>
      
   
  <BlogFooter/>


     </div>
        )
    }
}

export default BlogPosts
