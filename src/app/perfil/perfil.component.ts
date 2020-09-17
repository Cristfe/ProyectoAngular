import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario.model';
import { Producto } from '../models/producto.model';
import { Indice } from '../models/indice.model'
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})

export class PerfilComponent implements OnInit {


  arrUser: Usuario;
  arrProductos: Producto[];
  arrIndex: any;
  foto: string;




  constructor(private usersService: UsuariosService, private productosService: ProductosService) {

    this.arrIndex = [];
    this.arrUser;
    this.arrProductos = [];
  }


  async ngOnInit() {

    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    console.log(email);
    if (this.arrUser.foto === null || this.arrUser.foto === '') { this.foto = '../../assets/images/profile.png'; }
    else { this.foto = this.arrUser.foto; }
    console.log(this.arrUser);

    const id = this.arrUser.id;


    this.arrIndex = await this.productosService.indexByUser(id);

  }
  async onDelete($event) {

    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    const idUser = this.arrUser.id;
    const idProducto = $event.target.value;
    this.arrIndex = await this.productosService.deleteByFks(idUser, idProducto);


    window.location.reload();

  }


}

