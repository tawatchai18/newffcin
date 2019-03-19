import React, {Component} from 'react';
import './Welcome.css';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button,} from 'reactstrap';

class Welcome extends Component {

  constructor(){
    super();
    this.state = {
     username: '',
     password: '',
     redirectToReferrer: true
    };

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleValidSubmit() {
    localStorage.setItem('access-token', true)
    if(this.state.username && this.state.password){
    PostData('handleValidSubmit',this.state).then((result) => {
       let responseJson = result;
       if(responseJson.user.role){         
         sessionStorage.setItem('userData',JSON.stringify(responseJson));
         this.setState({redirectToReferrer: true}); 
       }
      });
    }
   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }
  render() {
    console.log(this.state.redirectToReferrer)
     if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'}/>)
    }
   
    else if(sessionStorage.getItem('Access-token')){
      return (<Redirect to={'/home'}/>)
      
    }
    else{
      return (
        <div className="row" id="Body">
          <div className="small-6 large-centered columns">
          <h4>Login</h4>
          <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
            <AvField name="username" label="Username" type="username" onChange={this.onChange} required />
            <AvField name="password" label="Password" type="password" onChange={this.onChange} required />
            <Button color="primary">Submit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <Button color="primary" href='/signup'>Register</Button> */}
            <a href="/signup">Register</a>
          </AvForm>
          </div>
        </div>
      );
    }
     
  }
}

export default Welcome;

// import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
// import {PostData} from '../../services/PostData';
// import './Welcome.css';

// class Welcome extends Component {

//   constructor(){
//     super();
   
//     this.state = {
//      username: '',
//      password: '',
//      redirectToReferrer: false
//     };

//     this.login = this.login.bind(this);
//     this.onChange = this.onChange.bind(this);

//   }

  

//   login() {
//     if(this.state.username && this.state.password){
//       PostData('login',this.state).then((result) => {
//        let responseJson = result;
//        if(responseJson.userData){         
//          sessionStorage.setItem('userData',JSON.stringify(responseJson));
//          this.setState({redirectToReferrer: true});
//        }
       
//       });
//     }
    
//    }

//   onChange(e){
//     this.setState({[e.target.name]:e.target.value});
//    }

  
  

//   render() {

//      if (this.state.redirectToReferrer) {
//       return (<Redirect to={'/home'}/>)
//     }
   
//     if(sessionStorage.getItem('userData')){
//       return (<Redirect to={'/home'}/>)
//     }

//      return (
//       <div className="row" id="Body">
//         <div className="medium-5 columns left">
//         <h4>Login</h4>
//         <label>Username</label>
//         <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
//         <label>Password</label>
//         <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
//         <input type="submit" className="button success" value="Login" onClick={this.login}/>
//         <a href="/signup">Registration</a>
//         </div>
//       </div>
//     );
//   }
// }

// export default Welcome;