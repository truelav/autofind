import React, { Component } from 'react'

export default class Car extends Component {
  constructor(props){
      super()
      this.state = {

      }
  }
  render() {
    console.log(this.props)
    const { car } = this.props
    return (
      <div className="car">
        <img src={car.media.photo_links[0]} alt="carImg"/>
        <div className="carInfo">
            <h2>{car.build.make}</h2>
            <h2>{car.build.model}</h2>
            <h3>Year: {car.build.year} Miles: {car.price}</h3>
        </div>    
      </div>
    )
  }
}
