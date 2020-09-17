import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  url: string;
  file: File;
  nombreArchivo: string;
  portada: string;
  createForm: FormGroup;


  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {
    {
      this.createForm = new FormGroup({
        'Nombre': new FormControl(''),
        'descripcion': new FormControl(''),
        'categoria': new FormControl(''),
        'fecha_alta': new FormControl(''),
        'precio': new FormControl(''),
        'imagen': new FormControl(''),
        'fk_usuario': new FormControl('')
      });
    }

  }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
    const file: File = event.target.files[0];
    console.log('Archivo seleccionado: ', file.type);

    const metaData = { 'contentType': file.type };
    var storage = firebase.storage().ref(`/productos/${file.name}/`);

    storage.put(file, metaData);
    this.nombreArchivo = file.name.split('.').shift();

    firebase.storage().ref().child(`/productos/${file.name}/`).getDownloadURL().then((pUrl) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.open('GET', pUrl);
      this.url = pUrl;

    }).catch((err) => {
      console.log(err);
    });
  };


  uploadPortada(event: any) {
    const file: File = event.target.files[0];
    console.log('Portada seleccionada: ', file.type);

    const metaData = { 'contentType': file.type };
    var storage = firebase.storage().ref(`/portadas/${file.name}/`);

    storage.put(file, metaData);
    this.nombreArchivo = file.name.split('.').shift();

    firebase.storage().ref().child(`/portadas/${file.name}/`).getDownloadURL().then((pUrl) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.open('GET', pUrl);
      this.portada = pUrl;

    }).catch((err) => {
      console.log(err);
    });
  };

  async onSubmit() {

    this.createForm.value.archivo = this.url;
    this.createForm.value.linkFoto = this.portada;
    let createProducto = this.createForm.value;
    await this.productosService.createProducto(createProducto);
    this.router.navigate(['/admin/productos/']);
  }


}
