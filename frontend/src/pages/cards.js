import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import object3DService from "../services/object3DService";

function Cards() {
  const [amphoraText, setAmphoraText] = React.useState("");
  const [thymiaterionText, setThymiaterionText] = React.useState("");
  const [plaqueText, setPlaqueText] = React.useState("");

  const retrieveObjectInfo = () => {
    // get thymiaterion text
    object3DService.getObject("Thymiaterion").then((data) => {
      setThymiaterionText(data.items[0].short_description);
    });

    // get amphora text
    object3DService.getObject("Large Green-glazed Amphora").then((data) => {
      setAmphoraText(data.items[0].short_description);
    });

    // get plaque text
    object3DService.getObject("Parthian Soldier Plaque").then((data) => {
      setPlaqueText(data.items[0].short_description);
    });
  };

  useEffect(retrieveObjectInfo, []);
  // get object information

  return (
    <Row xs={1} md={3} className="g-4">
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src="https://picsum.photos/600/300/?image=25"
          />
          <Card.Body>
            <Card.Title>Thymiaterion</Card.Title>
            <Card.Text>{thymiaterionText}</Card.Text>
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
            <Card.Text>{amphoraText}</Card.Text>
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
            <Card.Text>{plaqueText}</Card.Text>
            <Button
              variant="primary"
              src="https://picsum.photos/600/300/?image=26"
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
