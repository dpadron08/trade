import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Cards() {
  // return <h1> Hello! </h1>;

  return (
    <Row xs={1} md={3} className="g-4">
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src="https://picsum.photos/600/300/?image=25"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src="https://picsum.photos/600/300/?image=25"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src="https://picsum.photos/600/300/?image=26"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button
              variant="primary"
              onChange="https://picsum.photos/600/300/?image=26"
            >
              View Object
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Cards;
