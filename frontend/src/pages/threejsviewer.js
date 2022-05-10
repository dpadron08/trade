import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import object3DService from "../services/object3DService";
import "../styles.css";

const style = {
  height: 500,
  width: 800, // we can control scene size by setting container dimensions
};

const object_settings = {
  Thymiaterion: {
    name: "Thymiaterion",
    mtl: "models/thymiaterion2/Thymiaterion.mtl",
    obj: "models/thymiaterion2/Thymiaterion.obj",
    yt: "https://www.youtube.com/embed/lwthTpe_PS4",
    adjusting_camera: true,
  },
  Amphora: {
    name: "Large Green-glazed Amphora",
    mtl: "models/amphora/Amphora.mtl",
    obj: "models/amphora/Amphora.obj",
    yt: "https://www.youtube.com/embed/RPihdTz8Wtg",
    adjusting_camera: true,
  },
  Plaque: {
    name: "Parthian Soldier Plaque",
    mtl: "models/plaque/Figure.mtl",
    obj: "models/plaque/Figure.obj",
    adjusting_camera: false,
  },
};

class ThreeJsViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      objectShortDescription: "",
      objectFullDescription: "",
    };
  }

  create3DViewer() {
    this.setCamera();
    this.setScene();
    this.loadModel();
    this.doRender();
    this.doControls();
    this.addLights();
    this.setEventListeners();
    this.animate();
  }

  destroy3DViewer() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  populateTextFields() {
    object3DService
      .getObject(object_settings[this.state.name].name)
      .then((data) => {
        console.log("hi done");
        console.log(data);
        this.setState({
          objectShortDescription: data.items[0].short_description,
          objectFullDescription: data.items[0].full_description,
        });
      });
  }

  componentDidMount() {
    this.create3DViewer();
    this.populateTextFields();
  }

  componentDidUpdate() {
    if (this.props.name !== this.state.name) {
      window.location.reload();
    }
  }

  componentWillUnmount() {
    this.destroy3DViewer();
  }

  setCamera = () => {
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.mount.clientWidth / this.mount.clientHeight,
      1,
      1000
    );
    this.camera.position.z = 9;
    if (object_settings[this.props.name].adjusting_camera) {
      this.camera.position.z = 12;
    }
  };

  setScene = () => {
    this.scene = new THREE.Scene();
    this.ambient = new THREE.AmbientLight(0xffffff, 1.0);
    this.scene.add(this.ambient);
  };

  loadModel = () => {
    var mtlLoader = new MTLLoader();
    mtlLoader.load(object_settings[this.props.name].mtl, (materials) => {
      materials.preload();
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(object_settings[this.props.name].obj, (object) => {
        this.scene.background = new THREE.Color(0xa9a9a9);
        this.object = object;
        this.scene.add(object);
        this.camera.lookAt(object.position);
      });
    });
  };

  doRender = () => {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));
    this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
    this.mount.appendChild(this.renderer.domElement); // mount using React ref
  };

  // add ability to drag camera POV around
  doControls = () => {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
    if (object_settings[this.props.name].adjusting_camera) {
      this.controls.panSpeed = 0.05;
      this.controls.rotateSpeed = 0.05;
    }
  };

  // adding some lights to the scene
  addLights = () => {
    const lights = [];

    // set color and intensity of lights
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    // place some lights around the scene for best looks and feel
    lights[0].position.set(0, 2000, 0);
    lights[1].position.set(1000, 2000, 1000);
    lights[2].position.set(-1000, -2000, -1000);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
  };

  setEventListeners = () => {
    window.addEventListener("resize", this.handleWindowResize);
  };

  handleWindowResize = () => {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    // Note that after making changes to most of camera properties you have to call
    // .updateProjectionMatrix for the changes to take effect.
    this.camera.updateProjectionMatrix();
  };

  animate = () => {
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.animate);
    this.controls.update();
  };

  render() {
    return (
      <div className="obj-body">
        <div
          classname="obj-base"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <div style={style} ref={(ref) => (this.mount = ref)} />
          <div className="right-container">
            <div className="Title">{object_settings[this.state.name].name}</div>
            <hr className="new1"></hr>
            <p className="para4">
              Viewing note: Please scroll with your fingers upward until the
              image comes into view. Short description:{" "}
              {this.state.objectShortDescription}
            </p>
          </div>
        </div>
        <h1 className="all-about">All About This Object...</h1>
        <p className="full-desc">
          Full description: {this.state.objectFullDescription}
        </p>
        <h1 className="all-about">Where did it live?</h1>
        <iframe
          className="yt-embed"
          width="85%"
          height="500px"
          src={object_settings[this.props.name].yt}
          title="Environment video"
          frameborder="0"
        ></iframe>
      </div>
    );
  }
}

export default ThreeJsViewer;
