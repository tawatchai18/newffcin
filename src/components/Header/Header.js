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
          <div className="row column" style={{ marginLeft: 80 }} >
          <img style={{height:80, width:100}} src="LOGO_White.png"></img>
            {/* <h style={{marginTop:10,fontSize: 20, marginLeft:50, color: '#71ccae' }}>Family Folder Collector | (FFC)</h> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;