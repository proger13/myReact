import React, { Component } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import { Media } from 'react-media';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/js.jpg?format=2500w"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Blog about the first website I wrote.
                                    We are on the threshold of a long journey and soon everything will change.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/js.jpg?format=2500w"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Blog about the first website I wrote.
                                    We are on the threshold of a long journey and soon everything will change.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/js.jpg?format=2500w"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Blog about the first website I wrote.
                                    We are on the threshold of a long journey and soon everything will change.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/js.jpg?format=2500w"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Blog about the first website I wrote.
                                    We are on the threshold of a long journey and soon everything will change.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5>Categories</h5>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                                <ListGroup.Item>JS</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Blog about the first website I wrote.
                                    We are on the threshold of a long journey and soon everything will change.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}