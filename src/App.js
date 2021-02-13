import React from "react";
import BlogPosts from "./components/blog/BlogPosts";
import Footer from "./components/Footer";
// import {ClassComponent, ClassComponent2} from './components/ClassComponent';
// import  Counter from './components/Counter';
// import Click from './components/Click';
// import ParentComp from './components/ParentComp';

import Navbar from './components/Navbar';

const App = ( ) => {
  return (
    <>
  <Navbar/>
 <BlogPosts/>
  <Footer/>
  
    </>
  );
};
export default App;