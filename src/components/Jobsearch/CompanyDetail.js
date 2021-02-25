import React, { Component } from 'react'

export class CompanyDetail extends Component {
    render() {
        return (
            <div>      
        <div className="bg-gray-900	bg-left-top bg-auto bg-repeat-x h-64">
        </div>
        
        <div className="-mt-48">
          
        
          <div className="w-full text-center">
              
            <h1 className="font-bold text-5xl text-white">
              Google
            </h1>
          </div>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className=" text-gray-200 md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-100">Openings</a>
          <a className="mr-5 hover:text-gray-100">Reviews</a>
          <a className="mr-5 hover:text-gray-100">Forums</a>
          <a className="mr-5 hover:text-gray-100">Resources</a>
        </div>
      </div>
        </div>
      </div>
        )
    }
}

export default CompanyDetail
