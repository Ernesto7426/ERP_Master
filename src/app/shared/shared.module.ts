import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

/*Modulos*/
import { MaterialModule } from './../material/material.module';

// Services
import { CargarScriptsService } from './services/cargar-scripts.service';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  providers: [
    CargarScriptsService
  ]
})
export class SharedModule { }
