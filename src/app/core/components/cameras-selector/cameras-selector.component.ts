import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Camera } from 'three';
import { FreeCamera } from './objects/cameras/FreeCamera';
import { CameraSelectorService } from '../../services/CameraSelectorService';
import * as THREE from 'three';
import { OrbitalCamera } from './objects/cameras/OrbitalCamera';
import { RenderService } from '../../services/RenderService';

@Component({
  selector : 'app-cameras-selector',
  templateUrl : './cameras-selector.component.html',
  styleUrls: ['./cameras-selector.component.scss']
})
export class CamerasSelectorComponent implements OnInit {

  @Input() renderer: THREE.WebGLRenderer;

  public currentCamera: Camera;
  private orbitalCamera: OrbitalCamera;
  private freeCamera: FreeCamera;

  public constructor(
    private cameraSelectorService: CameraSelectorService,
    private renderService?: RenderService
  ) {
  }


  ngOnInit() {



    this.orbitalCamera = new OrbitalCamera(this.renderer);
    this.freeCamera = new FreeCamera(this.renderer);

    this.cameraSelectorService.setSelectedCamera(this.orbitalCamera);

    this.setFreeCameraUpdateDelta();

  }

  private setFreeCameraUpdateDelta() {
    this.renderService
      .onRended()
      .subscribe(delta => {
        this.freeCamera.update(delta);
      });
  }



}
