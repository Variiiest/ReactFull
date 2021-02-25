import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
class CourseDetail extends Component {
    render() {
        return (
            <div>


<div className="text-gray-600 h-screen flex overflow-hidden text-base">
      <div className="jobcard w-20 flex-shrink-0 flex-col hidden sm:flex">
          <div className="h-16  flex items-center justify-center ">
          <span className="text-2xl font-bold text-pink-500"> .edu</span>
          </div>
          <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
            <button className="h-10 w-12 text-gray-500 font-bold flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 0.48)', transform: '', msFilter: ''}}><path d="M3,13h1v2v5c0,1.103,0.897,2,2,2h3h6h3c1.103,0,2-0.897,2-2v-5v-2h1c0.404,0,0.77-0.244,0.924-0.617 c0.155-0.374,0.069-0.804-0.217-1.09l-9-9c-0.391-0.391-1.023-0.391-1.414,0l-9,9c-0.286,0.286-0.372,0.716-0.217,1.09 C2.23,12.756,2.596,13,3,13z M10,20v-5h4v5H10z M12,4.414l6,6V15l0,0l0.001,5H16v-5c0-1.103-0.897-2-2-2h-4c-1.103,0-2,0.897-2,2v5 H6v-5v-3v-1.586L12,4.414z" /></svg>
            </button>
            <button className="h-10 w-12 bgjobcard font-bold flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 0.48)', transform: '', msFilter: ''}}><path d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h8c0.131,0,0.26-0.026,0.381-0.076s0.232-0.123,0.326-0.217l7-7 c0.086-0.086,0.147-0.187,0.196-0.293c0.014-0.03,0.022-0.061,0.033-0.093c0.028-0.084,0.046-0.17,0.051-0.259 C20.989,13.041,21,13.021,21,13V5C21,3.897,20.103,3,19,3z M5,5h14v7h-6c-0.553,0-1,0.448-1,1v6H5V5z M14,17.586V14h3.586 L14,17.586z" /></svg>
            </button>
            <button className="h-10 w-12 text-gray-500 font-bold flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 0.48)', transform: '', msFilter: ''}}><path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9 17 6.243 14.757 4 12 4zM11 18H13V20H11z" /></svg>
            </button>
            <button className="h-10 w-12 text-gray-500 font-bold flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 0.48)', transform: '', msFilter: ''}}><path fill="none" d="M11 14L18 10 11 6z" /><path d="M4,8H2v12c0,1.103,0.897,2,2,2h12v-2H4V8z" /><path d="M20,2H8C6.896,2,6,2.896,6,4v12c0,1.104,0.896,2,2,2h12c1.104,0,2-0.896,2-2V4C22,2.896,21.104,2,20,2z M11,14V6l7,4 L11,14z" /></svg>
            </button>
          </div>
        </div>
        <div className="flex-grow overflow-hidden h-full flex flex-col">
 
          <div className="flex-grow flex overflow-x-hidden">
          
            <div className="flex-grow overflow-y-auto bg-gray-900">
              <div className="sm:px-7 pt-4 px-4 pb-4 flex flex-col w-full colorviolet sticky top-0">

              <div className="flex items-center space-x-3 mt-2">

   <h1 className="text-2xl font-bold text-white"> Introduction to Python</h1>
</div>
          
              </div>
             


             
              <div className="flex items-center space-x-3 px-2 py-2  bg-indigo-500 sticky top-16">

               
                
<a href="/" className="px-3 ml-2 text-white font-bold ">Video</a>
<a href="/" className="px-3  text-white font-bold">Notes</a>
<a href="/" className="px-3  text-white font-bold">Tests</a>
<a href="/" className="px-3  text-white font-bold">Forum</a>
</div>

  <section>  <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="w-full md:w-1/2">
          <div className="max-w-lg">
            <h1 className="text-2xl font-medium tracking-wide text-white md:text-4xl">Best Course for Dreamers</h1>
            <p className="mt-2 text-gray-300">Just dreaming about your Idea to be executed and Come to in real life. </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center space-x-6 text-gray-200">
               720+ 
                <span>- Video Lectures</span>
              </div>
              <div className="flex items-center space-x-6 text-gray-200">
                50
                <span>- Students Only</span>
              </div>
              <div className="flex items-center space-x-6 text-gray-200">
                 48+ 
                <span>- Mentors Session</span>
              </div>
              <div className="flex items-center space-x-6 text-gray-200">
                50+
                <span>- Experts Talk</span>
              </div>
              <div className="flex items-center space-x-6 text-gray-200">
               0 
                <span>- Fees (No Payment)</span>
              </div>
              <div className="flex items-center space-x-6 text-gray-200">
                50 +
                <span>Collaborative Projects</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://source.unsplash.com/random" alt="python" />
        </div>
      </div></section>


        
          <section className="text-gray-100 body-font bg-blue-600">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-100 font-medium title-font mb-2 md:w-2/5">Apply For the course and Get an Interview call from the team.</h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-lg title-font">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
            <div className="flex md:mt-4 mt-6">
              <button className="inline-flex text-gray-900 bg-indigo-100 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-200 rounded-full text-lg font-bold">Apply</button>
              
            </div>
          </div>
        </div>
      </section>
      


          <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-100 tracking-widest">OUR TEAM</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
            <div className="md:flex jobcard">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random" alt="Man looking at item at a store" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-base text-indigo-500 font-semibold">Case study</div>
            <a href="/" className="block mt-1 text-lg leading-tight font-bold text-black hover:underline">Finding customers for your new business</a>
            <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
            </div>



            
            <div className="p-4 lg:w-1/2">
            <div className="md:flex jobcard">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random" alt="Man looking at item at a store" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-base text-indigo-500 font-semibold">Case study</div>
            <a href="/" className="block mt-1 text-lg leading-tight font-bold text-black hover:underline">Finding customers for your new business</a>
            <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
            </div>
            <div className="p-4 lg:w-1/2">
            <div className="md:flex jobcard">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random" alt="Man looking at item at a store" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-base text-indigo-500 font-semibold">Case study</div>
            <a href="/" className="block mt-1 text-lg leading-tight font-bold text-black hover:underline">Finding customers for your new business</a>
            <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
            </div>
            <div className="p-4 lg:w-1/2">
            <div className="md:flex jobcard">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random" alt="Man looking at item at a store" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-base text-indigo-500 font-semibold">Case study</div>
            <a href="/" className="block mt-1 text-lg leading-tight font-bold text-black hover:underline">Finding customers for your new business</a>
            <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
            </div>
          </div>
        </div>
      </section>

       
            </div>

        
            
          </div>
        </div>
      </div>
                
            </div>
        )
    }
}

export default CourseDetail
