import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import PrivateRoute from '../src/PrivateRoute';
// import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import Creat from '././components/creat/creat';
import Map from '././components/map/map';
import Export from '././components/Export/export';
import User from '././components/User/User';
import NotFound from '././components/NotFound/NotFound';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="/creat" component={Creat}/>
          <Route path="/map" component={Map}/>
          <Route path="/export" component={Export}/>
          <Route path="/user" component={User}/>
          <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;