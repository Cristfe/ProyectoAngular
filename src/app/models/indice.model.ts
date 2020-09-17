export class Indice {
    id: number;
    fk_usuario: number;
    fk_producto: number;
    estado: string;
    valoracion: string;


    constructor(id: number, fk_usuario: number, fk_producto: number, estado: string, valoracion: string) {
        this.id = id;
        this.fk_usuario = fk_usuario;
        this.fk_producto = fk_producto;
        this.estado = estado;
        this.valoracion = valoracion;
    }
}