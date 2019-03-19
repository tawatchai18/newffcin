import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };
    this.onChange = this.onChange.bind(this);
    this.logout = this.logout.bind(this);
  }
  onChange(e) {
    this.setState({ userFeed: e.target.value });
  }

  logout() {
    sessionStorage.setItem("userData", '');
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }
  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'} />)
    }
    return (
      <div className="app flex-row align-items-center">
        <div className="callout primary" id="Header" >
          <div className="row column" style={{ marginLeft: 230 }} >
            <h1>Family Folder Collector | (FFC)</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;