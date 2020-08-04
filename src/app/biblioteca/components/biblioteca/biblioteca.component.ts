import { Component, OnInit, AfterViewInit, OnChanges, SimpleChange } from '@angular/core';
import { CargarScriptsService } from '../../services/cargar-scripts.service';
import { BibliotecaService } from '../../services/biblioteca.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit, AfterViewInit, OnChanges {
  // Variables.
  items = ['Todos', 'Word', 'Excel', 'Power Point'];
  orden = ['nombre', 'fecha', 'peso'];
  tipoOrden = ['Ascendente', 'Descendente'];
  show = false;
  categoriaArchivo = ['Todos los archivos', 'Recientes', 'Importantes', 'Borrados'];
  selectedItem = 'Todos los archivos';
  archives: any;
  countArchive = 0;
  paramOrden = this.orden[0];
  paramTipoOrden = 'asc';
  buscarActividad = '';
  busqueda: string;

  constructor( private cargarScripts: CargarScriptsService, private biblotecaSevice: BibliotecaService ) {
    cargarScripts.Carga( ['biblioteca'] );
  }

  ngOnInit() {
    // Carga todos los archivos al cargar la pagina.
    this.archives = this.biblotecaSevice.getAllArchives();
  }

  ngOnChanges() {

  }

  ngAfterViewInit() {
    for ( const categoria of this.categoriaArchivo ) {
      this.countArchive = this.biblotecaSevice.getCountclassificationArchive( categoria );

      switch ( categoria ) {
        case 'Todos los archivos': {
          this.countArchive = this.archives.length;
          break;
        }
      }

      $('a[id="' + categoria + '"]').find('span').html( this.countArchive.toString() );
    }

  }

  // Funcion para el filtrado de los datos en base al nombre.
  search( e: any ) {
    const arraySearch = this.biblotecaSevice.getSearch( this.selectedItem, e.target.value );
    this.archives = arraySearch;
  }

  // Funcion para los items del menu lateral del file manager.
  selectLink = ( event: any, item: string ) => {
    // @ts-ignore
    this.selectedItem = item;
    this.archives = [];

    // Carga la calsificación seleccionada.
    switch ( item ) {
      case 'Todos los archivos': {
        this.archives = this.biblotecaSevice.getAllArchives();
        break;
      }
      default: {
        this.archives = this.biblotecaSevice.getArchiveByCategory( item );
        break;
      }
    }
  }

  // Controla el ordenamiento de los archivos.
  Sort = ( orden: string, id: number ) => {
    this.paramOrden = orden;
    this.archives = this.biblotecaSevice.ordenarAsc( this.archives, orden, this.paramTipoOrden );
  }

  // Controla el ordenamiento de los archivos.
  sortTipoOrden = ( tipoOrden: string, id: number ) => {
    this.paramTipoOrden = tipoOrden;
    this.archives = this.biblotecaSevice.ordenarAsc( this.archives, this.paramOrden, tipoOrden );
  }
}
