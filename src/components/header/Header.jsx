import React from "react"
import webdevbg4 from "../../assets/webdevbg4.jpg"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars } from "@fortawesome/free-solid-svg-icons";
import  { Container, Row, Col, Image } from "react-bootstrap"

class Header extends React.Component  {
    render() {
        return (
            <Container fluid="lg">
                <Row>
                    <Col>
                        <nav className="navbar">
                            <div className="nav-logo">
                                <FontAwesomeIcon icon={faCode} style={{color: "#f1ebf4", fontSize:"22px"}} />
                                <a href="">MamanTube</a>
                            </div>
                            <div className="nav-menu">
                                <div className="menu-links">
                                    <a href="">About Me</a>
                                    <a href="">My Project</a>
                                    <a href="">Contact Me</a>
                                    <a href=""></a>
                                </div>
                                <button className="login-btn">Login</button>
                            </div>
                            <div className="humberger-menu">
                                <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
                            </div>
                        </nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="figures">
                        <Image src={webdevbg4} fluid/>
                    </div>
                    </Col>
                </Row>
            </Container>        
        )

    }
    
}

export default Header;