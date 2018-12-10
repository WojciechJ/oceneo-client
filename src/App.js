import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ProductsContainer from './components/ProductsContainer';
import Header from './components/Header';
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Router, Route, Link } from 'react-router-dom'


library.add(faStar)


class App extends React.Component {
constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }
componentDidMount(){
    let that = this
    axios.get('/users/check_for_user',{
    })
    .then(function(response){
      if(response.data.email){
        that.setState({
          currentUser: response.data.email
        })
      } else {
        that.setState({
          currentUser: null
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }
updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }
render(){
    return (
      <div>
        <ProductsContainer/>
      </div>
    )
  }
}

export default App;
