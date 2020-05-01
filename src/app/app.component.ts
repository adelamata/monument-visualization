import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public renderer: THREE.WebGLRenderer;
  public scene: THREE.Scene;

  constructor() {

  }

  ngOnInit() {
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setClearColor(new THREE.Color(0x000));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMapEnabled = true;
  }


}
