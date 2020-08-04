import { PipeTransform, Pipe } from '@angular/core';
import { Archive } from '../models/archive.model';

@Pipe ({
    name: 'archiveFilter'
})
export class ArchiveFilterPipe implements PipeTransform {
    transform( archives: Archive[], busqueda: string ) {
        if ( !archives || !busqueda ) {
            return archives;
        }

        return archives.filter( archive =>
            archive.nombre.toLocaleLowerCase().indexOf( busqueda.toLocaleLowerCase() ) !== -1
        );
    }
}
