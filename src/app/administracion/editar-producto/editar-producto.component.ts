import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from '../../services/productos.service'

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {


  producto: Producto;
  id: number;
  editForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService,
    private router: Router) {

    this.editForm = new FormGroup({
      'nombre': new FormControl(''),
      'usuario': new FormControl(''),
      'categoria': new FormControl(''),
      'fecha_alta': new FormControl((new Date()).toISOString().substring(0, 10)),
      'precio': new FormControl(''),
      'imagen': new FormControl(''),
      'descripcion': new FormControl(''),
      'archivo': new FormControl('', [Validators.required]),
      'fk_usuario': new FormControl('')
    });
  }

  async ngOnInit() {
    var id;
    this.activatedRoute.params.subscribe((params) => {
      id = params.productoId;
    });
    this.producto = await this.productosService.getProductoById(id);

    this.editForm = new FormGroup({
      'nombre': new FormControl(this.producto[0].nombre),
      'categoria': new FormControl(this.producto[0].categoria),
      'fecha_alta': new FormControl(this.producto[0].fecha_alta),
      'precio': new FormControl(this.producto[0].precio),
      'imagen': new FormControl(this.producto[0].imagen),
      'descripcion': new FormControl(this.producto[0].descripcion),
      'fk_usuario': new FormControl(this.producto[0].fk_usuario)
    });
  }


  async onSubmit() {
    let editedProducto = this.editForm.value;
    var id;
    this.activatedRoute.params.subscribe((params) => {
      id = params.comicId;
    });
    await this.productosService.editProducto(id, editedProducto);
    this.router.navigate(['/admin/productos/']);

  }



}
