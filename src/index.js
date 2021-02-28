import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import MainPage from './pages/MainPage';
import SignIn from './components/account/SignIn';

ReactDOM.render(
  <React.StrictMode>
      
    <Router>
    <MainPage/>

    <Route exact path="/" component ={App}/>
     
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
