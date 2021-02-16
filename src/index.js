import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Services from "./components/main/Services";
import Footer from "./components/main/Footer";
import {Route, BrowserRouter as Router} from 'react-router-dom'
import SignUp from './components/main/SignUp';
import Navbar from "./components/main/Navbar";
ReactDOM.render(
  <React.StrictMode>
       
    <Router>
    <Navbar/>
    <Route path="/services" component={Services}/>
    <Route path="/signup" component={SignUp}/>
    <Route exact path="/" component ={App}/>
    <Footer/>


    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
