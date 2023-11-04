import { Card, Row, Col, Container} from "react-bootstrap"
// import  {Image}  from "../../assets/ImageUrl";
import weddinginv from "../../assets/weddinginv.png";
import "./MyProject.css"

function MyProject() {
    return (
        <Container fluid>
             <Row className="project-line">
                    <Col><h3>MY PROJECT</h3></Col>
                </Row>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={weddinginv} style={{height: "70%"}} />
                        <Card.Body>
                        <Card.Title>My Project</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, obcaecati enim! Nemo, voluptatem! Magnam architecto voluptas nemo blanditiis animi. Sapiente vel distinctio commodi esse mollitia.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default MyProject;