import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PaginaIncialComponent} from './pagina-incial/pagina-incial.component';
import {MenubarModule} from 'primeng/menubar';
import {SharedModule} from './shared/shared.module';
import {TableModule} from 'primeng/table';
import {ListarEstadoComponent} from './estado/listar-estado/listar-estado.component';
import {ListarCidadeComponent} from './cidade/listar/listar-cidade.component';
import {InserirCidadeComponent} from './cidade/inserir/inserir-cidade.component';
import {InserirCidadeFormComponent} from './cidade/inserir/inserir-cidade-form/inserir-cidade-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {DeletarCidadeComponent} from './cidade/deletar/deletar-cidade.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PaginaIncialComponent,
    ListarEstadoComponent,
    ListarCidadeComponent,
    InserirCidadeComponent,
    InserirCidadeFormComponent,
    DeletarCidadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    SharedModule,
    TableModule,
    ReactiveFormsModule,
    MessageModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
