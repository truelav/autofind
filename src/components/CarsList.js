import React, { Component } from 'react'
import Car from './Car';

export default class CarsList extends Component {
  render() {
    const car= this.props.data
    return (
      <div className="listings">
        {   this.props.data.map(car => (
             <Car car={car} key={car.id}/>
             ))
         }    
      </div>
    )
  }
}
