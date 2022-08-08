import { Tab } from "bootstrap";
import React, { Component } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveRey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-colum mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Desing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" >Frameworkc</Nav.Link>
                                </Nav.Item><Nav.Item>
                                    <Nav.Link eventKey="fifht" >Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.content>
                                <Tab.Pane eventKey="first">
                                    <img src="https://www.figma.com/community/plugin/887996630608174929/thumbnail" />
                                    <p>The designer is not an artist, but also a creator. He draws websites like a portrait of Malevich</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://www.mindmeister.com/blog/wp-content/uploads/2018/11/Productivity-Tips-for-Meetings.jpghttps://www.mindmeister.com/blog/wp-content/uploads/2018/11/Productivity-Tips-for-Meetings.jpg" />
                                    <p>How do I imagine the ideal team in my head, it consists of people like me, but this is schizophrenia.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-scaled.jpg" />
                                    <p>I don't have a problem with alcohol, but I have a problem with coding</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://miro.medium.com/max/1838/1*ItGd7Itb99Cr6rE4qVD8wg.png" />
                                    <p>
                                        If you want to know everything, do it yourself.
                                        If you want to do it, google fast.
                                        If you want everything together, do it through the framework.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifht">
                                    <img src="https://kinsta.com/wp-content/uploads/2021/03/javascript-libraries-1200x675.png" />
                                    <p>
                                        The reading of all good books is like conversation with the finest men of past centuries.
                                        Чтение хороших книг — это разговор с самыми лучшими людьми прошедших времен. Рене Декарт
                                    </p>
                                </Tab.Pane>
                            </Tab.content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
        )
    }
}