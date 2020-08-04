// Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BibliotecaRoutingModule } from './biblioteca.routing.module';
import { SharedModule } from '../shared/shared.module';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { ArchiveFilterPipe } from './pipes/archive-filter.pipe';


// Services
import { CargarScriptsService } from './services/cargar-scripts.service';

@NgModule({
  declarations: [
    BibliotecaComponent,
    ArchiveFilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    BibliotecaRoutingModule,
    FormsModule
  ],
  providers: [
    CargarScriptsService
  ]
})
export class BibliotecaModule { }
