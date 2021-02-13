import React from "react";
// import {ClassComponent, ClassComponent2} from './components/ClassComponent';
// import  Counter from './components/Counter';
// import Click from './components/Click';
// import ParentComp from './components/ParentComp';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from "./components/Services";
import LatestPost from "./components/LatestPost";
import LatestEvents from "./components/LatestEvents";
import Footer from "./components/Footer";

const App = ( ) => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <LatestPost/>
    <LatestEvents/>
    <Footer/>
    </>
  );
};
export default App;