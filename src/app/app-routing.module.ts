import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminComponent } from './administracion/admin/admin.component';
import { AdminGeneralComponent } from './administracion/admin-general/admin-general.component'
import { AccesoGuard } from './acceso.guard';
import { AdminGuard } from './admin.guard';
import { EditarProductoComponent } from './administracion/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './administracion/agregar-producto/agregar-producto.component';
// import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AccesoGuard] },
  // { path: 'perfil/editar/:idUsuario', component: EditarPerfilComponent, canActivate: [AccesoGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'galeria', component: GaleriaComponent, canActivate: [AccesoGuard] },
  // { path: 'galeria/view/:idProducto', component: VisorComponent, canActivate: [AccesoGuard] },


  { path: 'admin', component: AdminGeneralComponent, canActivate: [AccesoGuard, AdminGuard] },
  { path: 'admin/productos', component: AdminComponent, canActivate: [AccesoGuard, AdminGuard] },
  { path: 'admin/productos/crear', component: AgregarProductoComponent, canActivate: [AccesoGuard, AdminGuard] },
  { path: 'productos/editar/:productoId', component: EditarProductoComponent, canActivate: [AccesoGuard, AdminGuard] },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
