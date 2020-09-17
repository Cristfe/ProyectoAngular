import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import * as firebase from 'firebase';
firebase.initializeApp(environment.firebaseConfig);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { EditarProductoComponent } from './administracion/editar-producto/editar-producto.component';
import { AdminComponent } from './administracion/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
    RegistroComponent,
    GaleriaComponent,
    EditarProductoComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    CarouselModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),



  ],
  providers: [{ provide: BUCKET, useValue: 'gs://colec-34b9a.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
