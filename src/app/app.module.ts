import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { PaginaIncialComponent } from './pagina-incial/pagina-incial.component';
import {MenubarModule} from 'primeng/menubar';
import { EstadoComponent } from './estado/estado.component';
import { CidadeComponent } from './cidade/cidade.component';
import {SharedModule} from './shared/shared.module';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    PaginaIncialComponent,
    EstadoComponent,
    CidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    SharedModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent, EstadoComponent]
})
export class AppModule { }
