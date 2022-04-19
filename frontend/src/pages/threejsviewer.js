import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

// TODO: use this instead of hardcoding the height value as 600
const style = {
  height: 600, // we can control scene size by setting container dimensions
};

class ThreeJsViewer extends React.Component {
  componentDidMount() {
    this.setCamera();
    this.setScene();
    this.loadModel();
    this.doRender();
    this.doControls();
    this.addLights();
    window.addEventListener("resize", this.handleWindowResize);
    this.animate();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    // this.controls.dispose();
  }

  setCamera = () => {
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.mount.clientWidth / 600,
      1,
      1000
    );
    this.camera.position.z = 9;
  };

  setScene = () => {
    this.scene = new THREE.Scene();
    this.ambient = new THREE.AmbientLight(0xffffff, 1.0);
    this.scene.add(this.ambient);
  };

  loadModel = () => {
    var mtlLoader = new MTLLoader();
    mtlLoader.load("sample_3d_assets/3d_model.mtl", (materials) => {
      materials.preload();
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load("sample_3d_assets/3d_model.obj", (object) => {
        this.scene.add(object);
      });
    });
  };

  doRender = () => {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));

    this.renderer.setSize(this.mount.clientWidth, 600);
    this.mount.appendChild(this.renderer.domElement); // mount using React ref
  };

  doControls = () => {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
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

  setEvents = () => {
    // nothing yet
  };

  animate = () => {
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.animate);
    this.controls.update();
  };

  render() {
    return <div style={style} ref={(ref) => (this.mount = ref)} />;
  }
}

export default ThreeJsViewer;
