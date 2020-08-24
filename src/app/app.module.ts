import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VentasComponent } from './ventas/ventas.component';
import { TiendaComponent } from './tienda/tienda.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';
import { TerminarCompraComponent } from './terminar-compra/terminar-compra.component';
import { DetalleDeVentaComponent } from './detalle-de-venta/detalle-de-venta.component';
import { ValoracionProductoComponent } from './valoracion-producto/valoracion-producto.component';
import { ValoracionUsuarioComponent } from './valoracion-usuario/valoracion-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShopComponent,
    ClientsComponent,
    ProductsComponent,
    ProductosComponent,
    ClientesComponent,
    VentasComponent,
    TiendaComponent,
    AgregarProductoComponent,
    DetalleDeProductoComponent,
    TerminarCompraComponent,
    DetalleDeVentaComponent,
    ValoracionProductoComponent,
    ValoracionUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
