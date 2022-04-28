import React, { useEffect } from "react";
import object3DService from "../services/object3DService";

function About(props) {
  const [text, setText] = React.useState("");

  useEffect(() => {
    object3DService.getAllObjects().then((data) => {
      console.log(data.items);
      setText(data.items);
    });
  }, []);

  return (
    <div>
      {" "}
      Hello {props.text} and data: {JSON.stringify(text)}
    </div>
  );
}

export default About;
