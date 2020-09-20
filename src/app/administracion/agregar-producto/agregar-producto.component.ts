import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {


  url: string;
  createForm: FormGroup;


  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {
    {
      this.createForm = new FormGroup({
        'Nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'descripcion': new FormControl('', [Validators.required]),
        'fecha_alta': new FormControl('', [Validators.required]),
        'precio': new FormControl('', [Validators.required]),
        'imagen': new FormControl('', [Validators.required]),
        'fk_usuario': new FormControl('', [Validators.required])
      });
    }

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    let createProducto = this.createForm.value;
    await this.productosService.createProducto(createProducto);
    this.router.navigate(['/admin/productos/']);
  }

} 
