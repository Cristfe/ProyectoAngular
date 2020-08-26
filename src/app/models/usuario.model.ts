export class Cliente {

    nombre: string;
    apellidos: string;
    email: string;
    lugar: string;
    imagen: string;


    constructor(pNombre = '', pApellidos = '', pEmail = '', pLugar = '', pImagen = '') {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.email = pEmail;
        this.lugar = pLugar;
        this.imagen = pImagen;
    }
}