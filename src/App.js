import React from "react";
import FunctionalComp from './components/FunctionalComp';
import {ClassComponent, ClassComponent2} from './components/ClassComponent';
import {Counter} from './components/Counter';
import {Click} from './components/Click';
const App = ( ) => {
  return (
    <>
    <h1>This tutorial is about components.</h1>
    <FunctionalComp/>
    <ClassComponent/>
    <Counter/>
    <Click/>
    <ClassComponent2/>
  
 
    </>
  );
};
export default App;