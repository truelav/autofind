import React, { Component } from 'react'

import data from '../../data.js';
import CarList from '../CarsList';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    let selectedValue = e.target.value
    this.setState({ value: selectedValue})
  }
  
  render() {
    const searchedCar = data.listings.filter( item => {
      if (item.build){
        return item.build.make === this.state.value
      }
    })
    return (
      <div>
        <select onChange={this.handleChange} selectedvalute={this.state.value}>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes-Benz">Mercedes</option>
          <option value="Jaguar">Jaguar</option>
          <option value="Land Rover">Land Rover</option>
          <option value="Porsche">Porsche</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
        </select>
        <CarList  data={searchedCar} />
      </div>
    )
  }
}

export default Search
