export class Seccion {
    id: number;
    nombre: string;
    categoria: string;


    constructor(id: number, nombre: string, categoria: string) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
    }
}