import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import Sidebar from './components/Sidebar/Sidebar'
// import MobileHeader from './components/MobileHeader/MobileHeader';


class App extends Component {

  constructor(){
    super();
    this.state={
      // appName: " Family Folder Collector (FFC)",
      appName: <a href="#" class="text-info">Family Folder Collector | (FFC)</a>,
      home: false
    }
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
      {/* <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper> */}
        {/* <div className="off-canvas-content" data-off-canvas-content> */}
          {/* <MobileHeader name={this.state.appName}/> */}
          {/* <Header/> */}
          {/* <Sidebar name={this.state.appName}/> */}
          <Routes name={this.state.appName}/>
          <hr/>
         {/* <Footer/> */}
        </div>
      // </div>
    // </div>
    );
  }
}

export default App;
