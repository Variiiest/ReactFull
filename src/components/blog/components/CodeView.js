import React, { Component } from 'react'

export class CodeView extends Component {
    render() {
        return (
            <div>
                    <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
          <div id="header-buttons" className="py-3 px-4 flex">
            <div className="rounded-full w-3 h-3 bg-red-500 mr-2" />
            <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2" />
            <div className="rounded-full w-3 h-3 bg-green-500" />
          </div>
          <div id="code-area" className="py-4 px-4 mt-1 text-white text-xl">
            <div className="mb-2">
              <span className="text-yellow-300">const</span> <span className="text-blue-400">pluckDeep</span> <span className="text-green-400">=</span> <span className="text-blue-400">key</span> <span className="text-green-400">=&gt;</span> <span className="text-blue-400">obj</span> <span className="text-green-400">=&gt;</span> <span className="text-purple-600">key</span>.<span className="text-purple-600">split</span>(<span className="text-blue-400">'.'</span>).<span className="text-purple-600">reduce</span>((<span className="text-blue-400">accum</span>, <span className="text-blue-400">key</span>) <span className="text-green-400">=&gt;</span> <span className="text-purple-600">accum</span>[<span className="text-purple-600">key</span>], <span className="text-purple-600">obj</span>)
            </div>
            <div className="mb-2">
              <span className="text-yellow-300">const</span> <span className="text-blue-400">compose</span> <span className="text-green-400">=</span> (<span className="cm-meta">...</span><span className="text-blue-400">fns</span>) <span className="text-green-400">=&gt;</span> <span className="text-blue-400">res</span> <span className="text-green-400">=&gt;</span> <span className="text-purple-600">fns</span>.<span className="text-purple-600">reduce</span>((<span className="text-blue-400">accum</span>, <span className="text-blue-400">next</span>) <span className="text-green-400">=&gt;</span> <span className="text-purple-600">next</span>(<span className="text-purple-600">accum</span>), <span className="text-purple-600">res</span>)
            </div>
            <div className="mb-2">
              <div className="sub-line">
                <span className="text-yellow-300">const</span> <span className="text-blue-400">unfold</span> <span className="text-green-400">=</span> (<span className="text-blue-400">f</span>, <span className="text-blue-400">seed</span>) <span className="text-green-400">=&gt;</span> {'{'}
              </div>
              <div className="sub-line ml-8">
                <span className="text-yellow-300">const</span> <span className="text-blue-400">go</span> <span className="text-green-400">=</span> (<span className="text-blue-400">f</span>, <span className="text-blue-400">seed</span>, <span className="text-blue-400">acc</span>) <span className="text-green-400">=&gt;</span> {'{'}
              </div>
              <div className="sub-line ml-16">
                <span className="text-yellow-300">const</span> <span className="text-blue-400">res</span> <span className="text-green-400">=</span> <span className="text-purple-600">f</span>(<span className="text-purple-600">seed</span>)
              </div>
              <div className="sub-line ml-16">
                <span className="text-yellow-300">return</span> <span className="text-purple-600">res</span> <span className="text-green-400">?</span> <span className="text-purple-600">go</span>(<span className="text-purple-600">f</span>, <span className="text-purple-600">res</span>[<span className="text-red-600">1</span>], <span className="text-purple-600">acc</span>.<span className="text-purple-600">concat</span>([<span className="text-purple-600">res</span>[<span className="text-red-600">0</span>]])) : <span className="text-purple-600">acc</span>
              </div>
              <div className="sub-line ml-8">
                {'}'}
              </div>
              <div className="sub-line ml-8">
                <span className="text-yellow-300">return</span> <span className="text-purple-600">go</span>(<span className="text-purple-600">f</span>, <span className="text-purple-600">seed</span>, [])
              </div>
              <div className="sub-line">
                {'}'}
              </div>
            </div>
          </div>
        </div>
      
                
            </div>
        )
    }
}

export default CodeView
