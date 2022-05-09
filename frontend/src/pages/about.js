import React, { useEffect } from "react";
import object3DService from "../services/object3DService";
import "../styles.css"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import glm from "../glm.png"
import rc from "../rc.jpg"
import al from "../al.jpeg"

function About(props) {
  const [text, setText] = React.useState("");

  useEffect(() => {
    object3DService.getAllObjects().then((data) => {
      console.log(data.items);
      setText(data.items);
    });
  }, []);

  return (
    // <div>
    //   {" "}
    //   Hello {props.text} and data: {JSON.stringify(text)}
    // </div>
    <div>
    <div className="head-block1">
      About TRADE
    </div >
    <div className = "tb1-container">
    <div className="text-block1">
      {props.text}
    </div>
    <div className="text-block2">
      Meet The Team
    </div>
    <div className="card-container">
    <Row xs={2} md={3} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top"  src={glm} />
        <Card.Body>
          <Card.Title>Georgia LaMacchia</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card>
        <Card.Img variant="top" src={glm} />
        <Card.Body>
          <Card.Title>Parker Zane</Card.Title>
          <Card.Text>
          Parker is a first year PhD student in Assyriology at Yale University. 
          He is interested in the intellectual history of ancient Iraq, human-environment interactions, and the history of astronomy and astrology.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card>
        <Card.Img variant="top" src={al} />
        <Card.Body>
          <Card.Title>Alana Liu</Card.Title>
          <Card.Text>
          Alana is a current junior in Computing and the Arts, Visual Arts at Yale University. 
          She is interested in how innovations in technology can change our interactions with art and media. 
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card>
        <Card.Img variant="top" src={glm} />
        <Card.Body>
          <Card.Title>Rohan Ahluwalia</Card.Title>
          <Card.Text>
            Rohan is a Computer Science major at Yale University.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card>
        <Card.Img variant="top" src={glm} />
        <Card.Body>
          <Card.Title>Zubin Mukerjee</Card.Title>
          <Card.Text>
            Zubin is a Computer Science and Math major at Yale University.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card>
        <Card.Img variant="top" src={rc} />
        <Card.Body>
          <Card.Title>Rosa Chang</Card.Title>
          <Card.Text>
          Rosa is currently a junior Computing and the Arts major at Yale University. 
          Coming from a fine arts background, she is interested in how visual art interacts with interactive technological mediums, such as Computer Graphics.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
    </div>
   
    </div>
    </div>
    
  );
}

export default About;
