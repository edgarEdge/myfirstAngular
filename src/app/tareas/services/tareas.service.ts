import { Injectable } from '@angular/core';

@Injectable()
export class TareasService {
    
    private tareas: string[] = ['Tarea1','Tarea2', 'Tarea3','Tarea4'];
    
    borrarTarea(id: number) {
        console.log('Borrar tarea desde servicio', id);
        this.tareas.splice(id, 1);
    }

    crearTarea(nuevaTarea: string) {
        console.log('Crear tarea desde servicio', nuevaTarea);
        if (nuevaTarea.trim()) {
            this.tareas.push(nuevaTarea);
        }
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