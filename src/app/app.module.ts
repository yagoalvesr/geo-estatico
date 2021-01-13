import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PaginaIncialComponent} from './pagina-incial/pagina-incial.component';
import {ListarEstadoComponent} from './estado/listar/listar-estado.component';
import {SharedModule} from './shared/shared.module';
import {ListarCidadeComponent} from './cidade/listar/listar-cidade.component';
import {DeletarCidadeComponent} from './cidade/deletar-cidade/deletar-cidade.component';
import {InserirCidadeComponent} from './cidade/inserir-cidade/inserir-cidade.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {ChipsModule} from 'primeng/chips';
import { InserirCidadeFormComponent } from './cidade/inserir-cidade/inserir-cidade-form/inserir-cidade-form.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    PaginaIncialComponent,
    ListarEstadoComponent,
    ListarCidadeComponent,
    DeletarCidadeComponent,
    InserirCidadeComponent,
    InserirCidadeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    SharedModule,
    TableModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    ChipsModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
