import * as THREE from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { RenderService } from '../../../../services/RenderService';
import { Injectable, Input } from '@angular/core';

@Injectable()
export class FreeCamera extends THREE.PerspectiveCamera {

  private flyControls: FlyControls;
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
    this.flyControls = new FlyControls(this, this.renderer.domElement);
    this.flyControls.movementSpeed = 10;
    // this.flyControls.rollSpeed = Math.PI / 24;
    // this.flyControls.dragToLook = false;
  }

  public update(delta: number) {
    this.flyControls.update(delta);
  }

  public getControls() {
    return this.flyControls;
  }

}
