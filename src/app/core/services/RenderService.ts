import { Injectable, EventEmitter } from '@angular/core';
import * as THREE from 'three';

@Injectable()
export class RenderService {

  private renderNeeded: EventEmitter<any>;
  private hasBeenRended: EventEmitter<any>;

  constructor() {
    this.renderNeeded = new EventEmitter();
    this.hasBeenRended = new EventEmitter();
  }

  public isRenderNeeded() {
    return this.renderNeeded;
  }

  public renderIsNeeded() {
      this.renderNeeded.next(true);
  }

  public onRended() {
    return this.hasBeenRended;
  }

  public hasRended(delta: number) {
    this.hasBeenRended.next(delta);
  }

}
