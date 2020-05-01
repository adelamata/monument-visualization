import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import * as THREE from 'three';
import { Color } from 'three';
import { CameraSelectorService } from '../../services/CameraSelectorService';
import { RenderService } from '../../services/RenderService';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('appVisor', {static: true}) appVisor: ElementRef;

  @Input() renderer: THREE.WebGLRenderer;
  @Input() scene: THREE.Scene;

  //
  //
  private geometry: THREE.BoxGeometry;
  private material: THREE.MeshBasicMaterial;
  private cube: THREE.Mesh;

  private currentCamera: THREE.Camera;
  private threeClock: THREE.Clock;

  constructor(
    private cameraSelectorService: CameraSelectorService,
    private renderService: RenderService
  ) {
  }

  ngOnInit() {

    //
    // Init clock
    this.threeClock = new THREE.Clock();

    this.cameraSelectorService
        .getSelectedCamera()
        .subscribe(
          camera => {
            this.currentCamera = camera;
          }
        );

    this.scene = new THREE.Scene();

    this.geometry = new THREE.BoxGeometry();
    this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.cube.position.y = 0;
    this.cube.position.z = 0;
    this.cube.position.y = 0.4;

    this.scene.background = new THREE.Color('#544C4A');

    this.scene.add(this.cube);



    var ambientLight = new THREE.AmbientLight(0x383838);
    this.scene.add(ambientLight);

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100, 140, 130);
    spotLight.intensity = 2;
    this.scene.add(spotLight);


    // var plane = new THREE.Plane( new THREE.Vector3( 1, 1, 0.2 ), 3 );
    // var helper = new THREE.PlaneHelper( plane, 1, 0xffff00 );

    var geometry = new THREE.PlaneGeometry( 100, 100, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );

    // geometry.rotateY(90);
    geometry.rotateX(1.57);
    geometry.center();
    plane.position.y = 0;
    plane.position.z = 0;
    plane.position.y = 0;

    this.scene.add(plane);

    this.appVisor.nativeElement.appendChild(this.renderer.domElement);

    this.animate();

  }

  ngOnChanges() {

  }

  ngOnDestroy() {


  }

  public animate() {
    let self = this;
    var animate = function () {


      //
      // Call that there are new rended
      self.renderService.hasRended(self.threeClock.getDelta());

      requestAnimationFrame( animate );

      // self.currentCamera.rotation.z += 0.5;
      // self.cube.rotation.y += 0.02;
      if (self.currentCamera) {
        self.renderer.clear();
        self.renderer.render( self.scene, self.currentCamera );

      } else {
        console.log ('Not camera!. Please set one.');
      }
    };

    animate();
  }


}
