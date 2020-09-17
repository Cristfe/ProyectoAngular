import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuario[];
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.usuarios = [];
    this.baseUrl = 'http://localhost:3000/users/';
  }

  registro(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}registro`, formValues).toPromise();
  }


  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}login`, formValues).toPromise();
  }

  createLocalToken(pResponse) {
    var token = pResponse;
    return localStorage.setItem('userToken', token);
  };

  retrieveLocalToken() {
    var token = localStorage.getItem('userToken');
    return token;
  };
  deleteToken() {
    localStorage.removeItem('userToken');
  };

  createLocalEmail(pEmail) {
    var email = pEmail;
    return localStorage.setItem('userEmail', email);
  };

  retrieveLocalEmail() {
    var email = localStorage.getItem('userEmail');
    return email;
  };


  deleteEmail() {
    localStorage.removeItem('userEmail');
  };


  getUserByEmail(pEmail) {
    return new Promise<any>((resolve, reject) => {
      const newUrl = this.baseUrl + 'login/' + pEmail;

      resolve(this.httpClient.get(newUrl).toPromise())
    })
  }

  editUser(pId: number, pValues): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.put(this.baseUrl + 'edit/' + pId, pValues).toPromise());
    });
  };

  getUserById(pId): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.get(this.baseUrl + 'user/' + pId).toPromise());
    });
  }

}
