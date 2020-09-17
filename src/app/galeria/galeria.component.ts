import { Component, OnInit, NgModule } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto.model';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  arrProducto: Producto[];
  categoria: string;
  arrIndex: any;



  constructor(private productosService: ProductosService) {
    this.arrProducto = [];


  }

  async ngOnInit() {
    this.arrProducto = await this.productosService.getAll();
    console.log(this.arrProducto);
  }

  onChange($event) {

    if ($event.target.value != '') {
      this.productosService.getByCategoria($event.target.value)
        .then(arrProductoCategoria => {
          this.arrProducto = arrProductoCategoria; console.log(arrProductoCategoria);
        })
    } else { this.productosService.getAll().then(arrProductoReturn => { this.arrProducto = arrProductoReturn }) }
  }

  viewerProducto(producto) {
    this.productosService.viewById(producto)
      .then(arrViewId => {
        this.arrProducto = arrViewId;
      })

  }



}
