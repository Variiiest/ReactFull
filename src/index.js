import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import JobDetail from "./components/Jobsearch/JobDetail"
import JobNav from "./components/Jobsearch/JobNav";
import {Route, BrowserRouter as Router} from 'react-router-dom'
import JobMain from './components/Jobsearch/JobMain';
import Companies from './components/Jobsearch/Companies';


ReactDOM.render(
  <React.StrictMode>
      
    <Router>
      <Companies/>
      <JobNav/>

      
      <Route path="/main" component ={JobMain}/>
    <Route exact path="/" component ={App}/>


    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
