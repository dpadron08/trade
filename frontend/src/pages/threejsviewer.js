import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
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
    adjusting_camera: true,
  },
  Amphora: {
    name: "Large Green-glazed Amphora",
    mtl: "models/amphora/Amphora.mtl",
    obj: "models/amphora/Amphora.obj",
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

  componentDidMount() {
    this.create3DViewer();
  }

  componentDidUpdate() {
    window.location.reload();
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={style} ref={(ref) => (this.mount = ref)} />
        <div>
          <div className="Title">Object Name</div>
          <hr className="new1"></hr>
        </div>
      </div>
    );
  }
}

export default ThreeJsViewer;
