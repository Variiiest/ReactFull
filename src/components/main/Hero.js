import React, { Component } from 'react'
import { Link} from 'react-router-dom';
class Hero extends Component {
    render() {
        return (
            <div className="colorviolet" style={{backgroundImage: 'url("http://127.0.0.1:5500/public/svgback.svg")'}}>
                  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col text-white">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-5">Microdosing synth tattooed vexillologist</h1>
            <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
            <div className="flex flex-col items-center mt-12 text-center">
                <span className="inline-flex w-full rounded-full shadow-sm md:w-auto">
                  <button type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-600  rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 active:bg-indigo-700">
                   <Link to="/blog">
                   TRY NOW
                   </Link>
                   
                  </button>
                </span>
              </div>
          </div>
        </div> 
            </div>
        )
    }
}

export default Hero
