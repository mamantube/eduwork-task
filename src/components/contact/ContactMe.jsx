import {Container, Row, Col} from "react-bootstrap";
import githublogo from "../../assets/githublogo.png";
import linkedinlogo from "../../assets/linkedinlogo.png";
import gmaillogo from "../../assets/gmaillogo.png";
import youtubelogo from "../../assets/youtubelogo.png";
import instagramlogo from "../../assets/instagramlogo.png"
import facebooklogo from "../../assets/facebooklogo.png"
import "./ContactMe.css"

function ContactMe() {
    return (
        <Container fluid>
            <Row className="contact-line">
                <Col>
                    <h3>CONTACT ME</h3>
                </Col>
            </Row>
            <Row className="contact-text">
                <Col>
                    <h3>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.</h3>
                </Col>
            </Row>
            <Row>
                <Col className="contact-icon">
                <div className="media-social">
                    <a href="https://github.com/mamantube" target="_blank" ><img src={githublogo} alt="" /></a>
                    <a href="https://www.linkedin.com/in/muhammad-firman-hidayat-7a5293209/" target="_blank" ><img src={linkedinlogo} alt="" /></a>
                    <a href="mailto:firmanhiday.id007@gmail.com" target="_blank" ><img src={gmaillogo} alt="" /></a>
                    <a href="https://www.instagram.com/firman_dy07/" target="_blank" ><img src={instagramlogo} alt="" /></a>
                    <a href="https://web.facebook.com/m.hidayat.18" target="_blank" ><img src={facebooklogo} alt="" /></a>
                </div>
                </Col>
            </Row>
            <Row>
                <Col className="footer">
                    Made with ❤ by MamanTube
                </Col>
            </Row>
        </Container>
    )
}

export default ContactMe;