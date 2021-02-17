import React, { Component } from 'react'
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';

class BlogDetail extends Component {
    render() {
        return (
            <div className="colorviolet text-gray-200">
              <BlogHeader/>
                <article className="py-12 px-4">
        <h1 className="text-4xl text-center mb-4 font-bold">The Official Dunder</h1>
        <p className="text-center mb-5">
          <span className="text-2xl">October 22, by</span>
          <a className="ml-1 text-indigo-600 hover:underline text-3xl" href="/">Michael Scott</a>
        </p>
        
        <div className="max-w-4xl mx-auto">
        <div className="rounded-lg overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full mb-10" src="https://dummyimage.com/1200x500" />
      </div>
          <p className="mb-4 text-lg leading-relaxed font-semibold">We offer a dependable and quick supply of copy paper suited to all kinds of printers. Each of our various products is designed to provide the finest performance and meet international standards.</p>
          <p className="mb-4 text-lg leading-relaxed font-semibold">We’re dedicated to ensure the highest level of customer satisfaction based on long-term professional relationships. By creating the positive working environment we’re enabling our employees to significantly improve not only their productivity, but what’s more important – job satisfaction.</p>
          <ul className="mb-4 list-inside list-disc text-lg leading-relaxed font-semibold">
            <li>High durability</li>
            <li>Value-based price</li>
            <li>Perfect performance on copy machines</li>
            <li>Long lasting whiteness</li>
          </ul>
          <p className="mb-10 text-lg leading-relaxed font-semibold">We deliver our services with passion and dedication unmatched by other so called “big players”. We create a friendly environment for our workers and that’s what makes their dedication soar to the maximum. You are getting not only the best possible product, but also our love for paper (completely free of charge).</p>
          <blockquote className="px-2 py-2 mb-10  border-l-4 border-indigo-800">
            <p className="text-lg font-bold mb-2 italic">"I would say I kind of have an unfair advantage, because I watch reality dating shows like a hawk, and I learn. I absorb information from the strategies of the winners and the losers. Actually, I probably learn more from the losers."</p>
            <footer className="text-green-400 text-lg font-bold">Michael Scott</footer>
          </blockquote>
      


    
      <div className="px-6 py-8 mx-auto bg-indigo-800 mt-8 rounded">
          <div className="items-center lg:flex">
          <div className="mt-8 lg:mt-0 lg:w-1/3">
              <div className="flex">
                <div className="max-w-lg">
                  <img className="object-cover object-center w-64 h-64 rounded-full shadow" src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" />
                </div>
              </div>
            </div>
            <div className="px-2 lg:w-2/3">
              <h2 className="text-3xl font-bold text-white ">Who I am</h2>
              <p className="mt-4 text-white lg:max-w-md text-lg ">
                Hi I am jane , software engineer <a className="font-bold text-indigo-100 " href="/">@BakaTeam</a> , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem sequi ex veniam consequuntur id, maiores beatae ipsa omnis aliquam?
              </p>
            </div>
           
          </div>
        </div>
       
        </div>
      </article>
      <div className="fixed h-screen left-0 bottom-14 items-center flex">
        <div className="inline-flex items-center flex-col">
          <button className="mb-10 px-2 py-2 outline-none focus:outline-none transform rotate-90 bg-indigo-700" theme-button="gray" >Comment
          </button>
          <button className="mt-2 px-2 py-2 mb-10 outline-none focus:outline-none transform rotate-90 bg-green-700" theme-button="gray" >BookMark
          </button>
      
          
        </div>
      </div>

<BlogFooter/>


            </div>
        )
    }
}

export default BlogDetail
