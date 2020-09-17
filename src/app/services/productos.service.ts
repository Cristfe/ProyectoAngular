import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';
import { Indice } from '../models/indice.model';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[];
  baseUrl: string;
  indiceUrl: string;
  indice: Indice;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/productos';
    this.indiceUrl = 'http://localhost:3000/secciones';
  }
  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.get(this.baseUrl).toPromise());
    });
  };

  getProductoById(pId): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.get(this.baseUrl + '/' + pId).toPromise());
    });
  }

  getByCategoria(categoria: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const urlFil = this.baseUrl + '/categoria/' + categoria;
      resolve(this.httpClient.get(urlFil).toPromise())
    });
  };


  createProducto(pValues): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.post(this.baseUrl + '/create/', pValues).toPromise());
    });
  }

  editProducto(pId: number, pValues): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.put(this.baseUrl + '/edit/' + pId, pValues).toPromise());
    });
  };

  indexByUser(pId: number): Promise<Indice> {
    return new Promise<any>((resolve, reject) => {
      const urlIndx = this.indiceUrl + '/' + pId;
      resolve(this.httpClient.get(urlIndx).toPromise())
    })
  }


  deleteProducto(pId): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.delete(this.baseUrl + '/' + pId).toPromise());
    });
  };
  deleteByFks(pUsuario, pProducto): Promise<Indice> {
    return new Promise<any>((resolve, reject) => {
      const urlDelete = this.indiceUrl + '/delete/' + pUsuario + '/' + pProducto;
      resolve(this.httpClient.delete(urlDelete, {}).toPromise())
    })
  }
  viewById(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const urlPdf = this.baseUrl + '/pdf/' + id;
      resolve(this.httpClient.get(urlPdf).toPromise());
    });
  };
}
