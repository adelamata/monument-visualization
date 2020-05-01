import { Component, OnInit, HostListener, Input } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Input() renderer: THREE.WebGLRenderer;

  public isHidden: boolean;

  constructor() {
    this.isHidden = false;
  }

  @HostListener('document:dblclick', ['$event'])
  documentDblClick (event) {
    this.isHidden = !this.isHidden;
  }

  ngOnInit() {
  }

}
