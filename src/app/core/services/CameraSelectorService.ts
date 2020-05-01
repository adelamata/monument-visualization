import { Injectable, EventEmitter } from '@angular/core';
import * as THREE from 'three';

@Injectable()
export class CameraSelectorService {

  private selected: EventEmitter<THREE.Camera>;

  constructor() {
    this.selected = new EventEmitter();
  }

  public getSelectedCamera() {
    return this.selected;
  }

  public setSelectedCamera(camera: THREE.Camera) {
    if (camera) {
      this.selected.next(camera);
    }
  }

}
