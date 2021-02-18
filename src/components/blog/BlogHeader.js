import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class BlogHeader extends Component {
    render() {
        return (
            <div className="">


                  
                  <nav className="colorviolet">
        <div className="container px-2 py-2 mx-auto md:flex">
       
            <div className="">
  
              <input type="text" className="w-full py-2 pl-4 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full dark:bg-gray-800 focus:outline-none focus:ring" placeholder="Search" />
            </div>
      </div>
      </nav>
            </div>
        )
    }
}

export default BlogHeader
