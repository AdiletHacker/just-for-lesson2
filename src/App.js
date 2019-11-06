import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getLogin} from "./Store/auth";



let App = (props) => {
  useEffect(() => {
    props.getLogin();
  }, []);

  return <div className='app'>

    <Header />
    <Navbar />
    <div className='content'>

      <Route path='/profile' component={Profile} />
      <Route path='/dialogs' component={Dialogs} />
      <Route path='/users' component={Users} />
      <Route path='/login' component={Login} />

    </div>

  </div>
};

export default connect(null, { getLogin })(App);















