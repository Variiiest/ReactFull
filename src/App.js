import React from "react";
import Hero from "./components/main/Hero";
import Navbar from "./components/main/Navbar";
import Services from "./components/main/Services";
import Companies from "./components/main/Companies";
import Footer from "./components/main/Footer";
import Features from "./components/main/Features";
import TestiMonials from "./components/main/TestiMonials";
import Subscribe from "./components/main/Subscribe";
const App = ( ) => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
<Features/>
<Subscribe/>
<TestiMonials/>


<Companies/>
<Footer/>


    </>

  );
};
export default App;