export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;
    categoria: string;
    epoca: string;
    valoracion: string;


    constructor(pId, pNombre = '', pDescripcion = '', pImagen = '', pPrecio, pCategoria = '', pEpoca = '', pValoracion = '') {

        this.id = pId;
        this.nombre = pNombre;
        this.descripcion = pDescripcion;
        this.imagen = pImagen;
        this.precio = pPrecio;
        this.imagen = pImagen;
        this.categoria = pCategoria;
        this.epoca = pEpoca;
        this.valoracion = pValoracion;
    }
}