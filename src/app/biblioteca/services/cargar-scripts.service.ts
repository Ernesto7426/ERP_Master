import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() {}

  Carga( archivos: string[] ) {
    for ( const archivo of archivos ) {
      let script;
      let body;

      script = document.createElement('script');
      script.src = '../../assets/js/biblioteca/' + archivo + '.js';
      body = document.getElementsByTagName('body')[0];
      body.appendChild( script );
    }
  }
}
