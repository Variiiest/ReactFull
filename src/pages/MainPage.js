import React, { Component } from 'react'
import Companies from '../components/main/Companies'

import Navbar from '../components/main/Navbar'
import Services from '../components/main/Services'
import LatestPost from '../components/main/LatestPost'
import Subscribe from '../components/main/Subscribe'
import Footer from '../components/main/Footer'
export class MainPage extends Component {
    render() {
        return (
            <div>

<Navbar/>
<Services/>
<Companies/>
<LatestPost/>
<Subscribe/>

<Footer/>



                
            </div>
        )
    }
}

export default MainPage
