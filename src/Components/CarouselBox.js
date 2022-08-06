import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import forestImg from '../assets/120.jpg';
import dforestImg from '../assets/121.jpg';
import rforestImg from '../assets/122.jpg';

export default class CarouselBox extends Component {
    render () {
        return (
           <Carousel>
               <Carousel.Item>
                   <img
                      className="d-bloc w-100"
                      src={ forestImg }
                      alt="Forest"
                   />
                   <Carousel.Caption>
                       <h3>JOB IS NOT WOLF</h3>
                       <p>it won't run into the forest</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                      className="d-bloc w-100"
                      src={ dforestImg }
                      alt="Forest"
                   />
                   <Carousel.Caption>
                       <h3>THIS IS A START</h3>
                       <p>We will be fleas of space, jumping from star to star</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                      className="d-bloc w-100"
                      src={ rforestImg }
                      alt="Forest"
                   />
                   <Carousel.Caption>
                       <h3>88888</h3>
                       <p>0000000000000000</p>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        )
    }
}