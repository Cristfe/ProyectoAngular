import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { RouterOutlet, Router } from '@angular/router';

import { } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Colec';
  arrRutas: any[];
  baseUrl: string;
  mostrarCabecera: boolean;


  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
  ) {
    this.baseUrl = "http://localhost:4200/"
    this.arrRutas = ['/home', '/registro'];
  }


  ngOnInit() {
    this.router.events.subscribe(() => {
      this.mostrarCabecera = this.arrRutas.includes(this.router.url);
    });
  };



  async logOut() {
    await this.usuariosService.deleteEmail();
    await this.usuariosService.deleteToken();
    this.router.navigate(['/home/']);
  }
}


