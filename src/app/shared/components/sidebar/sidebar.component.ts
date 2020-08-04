import { Component, OnInit } from '@angular/core';

// Servicios
import { CargarScriptsService } from '../../services/cargar-scripts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( private cargarScripts: CargarScriptsService ) {
    cargarScripts.Carga( ['sidebar', 'mdb.min'] );
  }

  ngOnInit() {
  }

}
