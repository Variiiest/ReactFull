import React from "react";
import FunctionalComp from './components/FunctionalComp';
import {ClassComponent, ClassComponent2} from './components/ClassComponent';
import  Counter from './components/Counter';
import Click from './components/Click';
import ParentComp from './components/ParentComp';
const App = ( ) => {
  return (
    <>
    <h1>This tutorial is about components.</h1> 
    <FunctionalComp/>
    <ParentComp/>
    <ClassComponent/>
    <Counter/>
    <Click/>
    <ClassComponent2/>
  
 
    </>
  );
};
export default App;