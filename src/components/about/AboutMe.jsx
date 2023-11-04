import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import maman from "../../assets/maman.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5,faCss3Alt, faNode, faVuejs } from "@fortawesome/free-brands-svg-icons";
import "./AboutMe.css"

class AboutMe extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="about-line">
                    <Col><h3>ABOUT ME</h3></Col>
                </Row>
                <Row>
                    <Col style={{ justifyContent: "center"}}>
                        <Image src={maman} style={{width: "70%", padding: "10%" }} roundedCircle />
                    </Col>
                    <Col>
                        <div className="about">
                            <h1>HI EVERY ONE!!!</h1>
                            <h4>My Name Muhammad Firman Hidayat</h4>
                            <h5>You can call me Maman</h5>
                            <p>I am a website developer, I really love this field. I have been in this field for several years, it is very exciting when I try to program a website or application. Although sometimes there are errors but that's what makes me keep learning to solve these errors.</p>
                        </div>
                        <Row>
                            <Col>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faHtml5} bounce size="2xl" style={{color: "#e0350b",}} />
                                    <FontAwesomeIcon icon={faCss3Alt} bounce size="2xl" style={{color: "#474deb", paddingLeft: "10px"}} />
                                    <FontAwesomeIcon icon={faReact} bounce size="2xl" style={{paddingLeft: "10px", color: "61dbfb"}}/>
                                    <FontAwesomeIcon icon={faNode} bounce size="2xl" style={{color: "#3cb73a", paddingLeft: "10px"}} />
                                    <FontAwesomeIcon icon={faVuejs} bounce size="2xl" style={{color: "#42b883", paddingLeft: "10px"}} />
                                </div>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AboutMe;