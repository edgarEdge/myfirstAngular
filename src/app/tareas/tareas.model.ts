export interface Tarea {
    id: number;
    descripcion: string;
    tipoTarea: 'acumulable' | 'cronometrada';
    duracion: number;
}