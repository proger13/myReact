import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, Card, Button } from "react-bootstrap";
import CardDeck from 'react-bootstrap/CardDeck'


export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4"> OUR TEAM </h2>
                    <CardDeck>
                        <Card bg="info">
                            <Card.Img
                                variant="top"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsuSsNdq9xlj0hqfS_L9VE3VcBRxAMlvfEg&usqp=CAU"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>"Challenges are what make life interesting and overcoming them is what makes life meaningful."
                                    Joshua J. Marine
                                </Card.Text>
                                <Button>About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="info">
                            <Card.Img
                                variant="top"
                                src="https://team-it-group.de/wp-content/uploads/2019/11/bild-1.jpgs"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>"Challenges are what make life interesting and overcoming them is what makes life meaningful."
                                    Joshua J. Marine
                                </Card.Text>
                                <Button>About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="info">
                            <Card.Img
                                variant="top"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZQJurs9dh1LBqwOg0jJZUqjvxCP16AyvAQ&usqp=CAU"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>"Challenges are what make life interesting and overcoming them is what makes life meaningful."
                                    Joshua J. Marine
                                </Card.Text>
                                <Button>About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}