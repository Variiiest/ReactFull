import React from "react";
import Footer from "./components/Footer";
import Companies from "./components/main/Companies";

import SignUp from "./components/main/SignUp";
// import {ClassComponent, ClassComponent2} from './components/ClassComponent';
// import  Counter from './components/Counter';
// import Click from './components/Click';
// import ParentComp from './components/ParentComp';

import Navbar from './components/Navbar';

const App = ( ) => {
  return (
    <>

  <Navbar/>
  <SignUp/>
 

<Companies/>
  <Footer/>
    </>
  );
};
export default App;