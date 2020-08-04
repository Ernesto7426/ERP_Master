import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Archive } from '../models/archive.model';


@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  constructor( private http: HttpClient ) { }

  archives: Archive[] = [
    {
      nombre: 'resumen',
      tipo: 'pdf',
      peso: '2.0mb',
      categoria: 'Recientes',
      fecha: '01-05-2020'
    },
    {
      nombre: 'sales',
      tipo: 'pdf',
      peso: '1.2mb',
      categoria: 'Recientes',
      fecha: '14-05-2020'
    },
    {
      nombre: 'Alta',
      tipo: 'pdf',
      peso: '1.5mb',
      categoria: 'Importantes',
      fecha: '05-05-2020'
    },
    {
      nombre: 'Marzo',
      tipo: 'pdf',
      peso: '1.0mb',
      categoria: 'Borrados',
      fecha: '15-05-2020'
    }
  ];


  // Funcion para el filtrado de los datos en base al nombre.
  getSearch( clasificacion: string, e: string ) {
    const archives = this.archives.filter( item => item.categoria.indexOf( clasificacion ) > -1 );
    const arraySearch = archives.filter( res => {
      return res.nombre.toLocaleLowerCase().match( e.toLocaleLowerCase() );
    });

    return arraySearch;
  }

  // Funcion que retorna todos los elementos del Json.
  getAllArchives = () => {
    const arrayArchives = this.archives.filter( item => item.categoria !== 'Borrados' );
    return arrayArchives;
  }

  // Funcion que retorna los elementos del Json dependiendo la categoria seleccionada.
  getArchiveByCategory = ( categoria: string ) => {
    const arrayArchives = this.archives.filter( item => item.categoria.indexOf( categoria ) > -1 );
    return arrayArchives;
  }

  // Retorna la cantidad de archivos pertenecientes a una categoria.
  getCountclassificationArchive = ( categoria: string ) => {
    const arrayArchives = this.archives.filter( item => item.categoria.indexOf( categoria ) > -1 );
    return arrayArchives.length;
  }

  // Ordena el Json por el campo seleccinado ya sea Asc o Desc.
  ordenarAsc = ( data: any, key: string, orden: string ) => {
    return data.sort( (a, b) => {
      const x = a[key];
      const y = b[key];

      if (orden === 'asc' || orden === 'Ascendente') {
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }

      if (orden === 'desc' || orden === 'Descendente' ) {
          return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      }
  });
  }

}
