import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class OrbitalCamera extends THREE.PerspectiveCamera {

  private orbitControls: OrbitControls;
  private renderer: THREE.WebGLRenderer;


  constructor(
    renderer: THREE.WebGLRenderer
  ) {
    super(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    //
    // Set renderer
    this.renderer = renderer;

    this.position.z = 5;
    this.position.y = 2;

    this.rotateX(-0.3);

    this.initListeners();
  }



  private initListeners() {
    this.orbitControls = new OrbitControls(this, this.renderer.domElement);
    this.orbitControls.addEventListener( 'change', ()=>{
    } );
    this.orbitControls.minDistance = 2;
    this.orbitControls.maxDistance = 50;
    this.orbitControls.minPolarAngle = 1.2;
    this.orbitControls.maxPolarAngle = 1.2;
    this.orbitControls.enablePan = true;
  }



}
