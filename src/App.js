import React from "react";
import { LoginControl } from "./components/LoginControl";
import Services from "./components/main/Services";

import {Route, BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./components/main/Navbar";

const App = ( ) => {
  return (
    <>
    <Router>
    <Route exact path="/" component={Navbar}/>
    <Route path="/services" component={Services}/>
    <Route path="/login" component={LoginControl}/>


    </Router>

    </>

  );
};
export default App;