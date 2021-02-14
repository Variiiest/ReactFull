import React from 'react';
export class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <button onClick={this.handleLogoutClick}>Logout</button>;
      } else {
        button = <button onClick={this.handleLoginClick}>Login</button>;
      }
  
      return (
        <div>
          You are login
          {button}
        </div>
      );
    }
  }
  