import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

export default class Slideshow extends Component {
  constructor(props){
    super(props)
    this.state = {
        image: '',
        currentIndex: 0,
        translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0){
      this.setState({
        currentIndex: this.props.images.length - 1
      })
    }
    this.setState({
      currentIndex: this.state.currentIndex - 1
    })
    console.log(this.state.currentIndex)
  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.props.images.length - 1){
      this.setState({
        currentIndex: 0
      })
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
    console.log(this.state.currentIndex)
  }

  render() {

    const slides = this.props.images;
    const index = this.state.currentIndex

    return (
        <Carousel id="individualCar">
          <div >
            <img src={slides[0]} alt="image" id="carImage"/>
          </div>
          <div >
            <img src={slides[0]} alt="image" id="carImage"/>
          </div>
          <div >
            <img src={slides[0]} alt="image" id="carImage"/>
          </div>
        </Carousel>  
    )
  }
}
