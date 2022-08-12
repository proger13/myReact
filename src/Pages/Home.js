import React, { Component } from "react";
import { Container, CardDeck, Card  } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";

export default class Home extends Component {
    render () {
        return (
            <>
         <CarouselBox/>
         <Container>
             <h2 className="text-center m-4"> OUR TEAM </h2>
             <CardDeck>
                 <Card>

                 </Card>
             </CardDeck>
         </Container>
         </>
        )
    }
}