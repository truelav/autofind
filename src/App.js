import React, { Component } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import CarList from './components/CarsList';
import DefaultPage from './pages/index';
import Search from './components/Search/Search';

import data from './data.js';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: []
    }
  }

  componentWillMount(){
    // axios.get(`https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&latitude=34.093991&longitude=-118.361810&radius=10&seller_type=dealer`)
    //   .then( response => {
    //     let carList = response.data.listings
    //     this.setState({
    //       inventory: carList
    //     })
    //     console.log(response)
    //   } )
    //   .catch( err => {
    //     console.log(err)
    //   })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <p>Welcom to my autoFind</p>
          <Route exact path="/" component={DefaultPage} />
          <Route path = "/know" component={Search} />
          <Route path = "/dontknow" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
