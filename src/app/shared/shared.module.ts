import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './../material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

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
