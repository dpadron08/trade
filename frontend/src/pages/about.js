import React, { useEffect } from "react";
import object3DService from "../services/object3DService";
import "../styles.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import glm from "../glm2.jpg";
import rc from "../rc.jpg";
import al from "../al.jpg";
import pz from "../pz.jpeg";
import dpc from "../lauren-1007252527-1.jpg"
import ra from "../ra.jpg"
import sd from "../IMG_5323.jpg"

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
      <div className="masthead2">
                <div className="fw-light">About TRADE</div>
                <p className="lead">{props.text}</p>
      </div>
      <div className="tb1-container">
        <div className="text-block2">Meet The Team</div>
        <div className="card-container">
          <Row xs={2} md={3} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src={glm} />
                <Card.Body>
                  <Card.Title>Georgia LaMacchia</Card.Title>
                  <Card.Text>
                    Georgia is a first-year PhD student. Currently, she is abroad in 
                    Egypt conducting research.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={pz} />
                <Card.Body>
                  <Card.Title>Parker Zane</Card.Title>
                  <Card.Text>
                    Parker is a first year PhD student in Assyriology at Yale
                    University. He is interested in the intellectual history of
                    ancient Iraq, human-environment interactions, and the
                    history of astronomy and astrology.
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
                    Alana is a current junior in Computing and the Arts, Visual
                    Arts at Yale University. She is interested in how
                    innovations in technology can change our interactions with
                    art and media.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ra} />
                <Card.Body>
                  <Card.Title>Rohan Ahluwalia</Card.Title>
                  <Card.Text>
                    Rohan is a a second-year student pursuing a B.S./M.S. in Computer Science from Yale Univeristy.
                    He is a student researcher with Dr. Jason Liu in the Gerstein Lab and is involved in several extracurriculars.
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
                    Zubin is a Computer Science and Math major at Yale
                    University.
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
                    Rosa is currently a junior Computing and the Arts major at
                    Yale University. Coming from a fine arts background, she is
                    interested in how visual art interacts with interactive
                    technological mediums, such as Computer Graphics.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={dpc} />
                <Card.Body>
                  <Card.Title>David Padron Castillo</Card.Title>
                  <Card.Text>
                    Rosa is currently a junior Computing and the Arts major at
                    Yale University. Coming from a fine arts background, she is
                    interested in how visual art interacts with interactive
                    technological mediums, such as Computer Graphics.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={sd} />
                <Card.Body>
                  <Card.Title>Sam Eshun Danquah</Card.Title>
                  <Card.Text>
                    Sam is a junior Computer Science student at Yale. He is interested
                    in the many ways computers can intersect with different fields, and 
                    currently works as a machine learning intern for a startup focused on
                    ethical deepfake technology.
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
