import React, { Component } from 'react'

import CarInfo from './car/CarInfo';
import CarCarousel from './car/CarCarousel';
import CarMainPicture from './car/CarMainPicture';

export default class Car extends Component {
  constructor(props){
      super()
      this.state = {
        mainImage: '',
        carouselImages: []
      }
  }

  handleClickOnImage = (image) => {
    this.setState({
      mainImage: image
    })
  }

  componentDidMount() {

    // var carImage = '';
    // var carImages = '';

    if ( this.props.car.media.photo_links !== undefined ){   
      this.setState({
        mainImage: this.props.car.media.photo_links[0],
        carouselImages: this.props.car.media.photo_links
      })
    } 

  }

  render() {
    const { car } = this.props
    return (
      <div className="car car-info">

        <div className="car-specs">
          <CarInfo car={car}/>
        </div>

        <div className="car-images">
          <div className="main-car-image">
            <img src={this.state.mainImage} alt="car image"/>
          </div>

          <div className="car-carousel-images">
            <CarCarousel images={this.state.carouselImages} handleClickOnImage={this.handleClickOnImage}/>
          </div>
        </div>  

      </div>
    )
  }
}
