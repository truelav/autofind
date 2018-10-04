import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

export default class CarCarousel extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <div id="individualCar">

            {this.props.images.map( (image, index) => {
                return  <div className="car-image-thumbnail">
                            <img src={image} alt="image" id="carImage" onClick={ ()=> this.props.handleClickOnImage(image)}/>
                        </div>
            } )}
            
        </div>  
    )
  }
}
