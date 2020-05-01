import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisorComponent } from './core/components/visor/visor.component';
import { MainMenuComponent } from './core/components/main-menu/main-menu.component';
import { CamerasSelectorComponent } from './core/components/cameras-selector/cameras-selector.component';
import { CameraSelectorService } from './core/services/CameraSelectorService';
import { RenderService } from './core/services/RenderService';

@NgModule({
  declarations: [
    AppComponent,
    VisorComponent,
    MainMenuComponent,
    CamerasSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CameraSelectorService,
    RenderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
