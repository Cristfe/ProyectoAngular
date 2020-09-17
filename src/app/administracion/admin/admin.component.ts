import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductosService } from '../../services/productos.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  arrProductos: Producto[];

  constructor(private productosService: ProductosService) { }

  async ngOnInit() {
    this.arrProductos = await this.productosService.getAll();
  }

  async onDelete(pId) {
    console.log(pId);
    await this.productosService.deleteProducto(pId);
    window.location.reload();
  }

}
