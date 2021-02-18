import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SignIn from "./components/account/SignIn";
import {Route, BrowserRouter as Router} from 'react-router-dom'
import SignUp from './components/account/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import BlogPosts from './components/blog/BlogPosts';
import BlogDetail from './components/blog/BlogDetail';
import TopBlogger from './components/blog/TopBlogger';
import PodCastlist from './components/podcast/PodCastlist';
import CourseList from './components/academy/CourseList';
import CourseDetail from './components/academy/CourseDetail';
import Navbar from './components/main/Navbar';
import BlogFooter from './components/blog/BlogFooter';


ReactDOM.render(
  <React.StrictMode>
      
    <Router>
    <Navbar/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/signin" component={SignIn}/>
    <Route path='/blog' component={BlogPosts}/>
    <Route path='/detail' component={BlogDetail}/>
    <Route path='/podcast' component={PodCastlist}/>
    <Route path='/course' component={CourseList}/>
    <Route path='/hu101' component={CourseDetail}/>
    <Route path='/pricing' component={TopBlogger}/>
    <Route path="/signup" component={SignUp}/>
    <Route exact path="/" component ={App}/>
    <BlogFooter/>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
