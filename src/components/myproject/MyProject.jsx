import { Card, Row, Col, Container} from "react-bootstrap"
import "./MyProject.css"
import Image from "../ImageUrl"

function MyProject() {
    return (
        <Container fluid>
            <Row className="project-line">
                <Col><h3>MY PROJECT</h3></Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                {Image.map((data, index) => (
                    <Col  className="cards" key={index}>
                    <Card className="card-item">
                        <Card.Img variant="top" src={data.url} style={{height: "70%"}} />
                        <Card.Body>
                        <Card.Title>{data.cardTitle}</Card.Title>
                        <Card.Text>
                            {data.cardText}
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