import React, { Component } from 'react'
import Slideshow from './Slideshow';

export default class Car extends Component {
  constructor(props){
      super()
      this.state = {

      }
  }
  render() {
    const { car } = this.props
    return (
      <div className="car">
        {/* <img src={car.media.photo_links[0]} alt="carImg"/> */}
        <Slideshow images={car.media.photo_links}/>
        <div className="carInfo">
            <h2>{car.build.make}</h2>
            <h2>{car.build.model}</h2>
            <h3>Year: {car.build.year} Miles: {car.price}</h3>
        </div>    
      </div>
    )
  }
}
