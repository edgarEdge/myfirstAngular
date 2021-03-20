import { Injectable } from '@angular/core';
import { Tarea } from '../tareas.model';

@Injectable()
export class TareasService {
    
    private currentId: number = 2;
    private tareas: Tarea[] = [{
        id: 1,
        descripcion: 'Tarea1',
        tipoTarea: 'acumulable',
        duracion: 10000
    }, {
        id: 2,
        descripcion: 'Tarea2',
        tipoTarea: 'cronometrada',
        duracion: 20000
    }];
    
    borrarTarea(id: number) {
        console.log('Borrar tarea desde servicio', id);
        const index = this.tareas.findIndex(t => t.id===id);
        this.tareas.splice(index, 1);
    }

    crearTarea(nuevaTarea: Tarea) {
        console.log('Crear tarea desde servicio', nuevaTarea);
        nuevaTarea.id = ++this.currentId;
        this.tareas.push(nuevaTarea);
    }

    obtenerTareas() {
        console.log('Obtener tareas desde servicio');
        return this.tareas;
    }

    limpiarLista() {
        console.log('Limpiar tareas desde servicio');
        this.tareas = [];
    }
}