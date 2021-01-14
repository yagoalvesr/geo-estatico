import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaginaIncialComponent} from './pagina-incial/pagina-incial.component';
import {ListarEstadoComponent} from './estado/listar-estado/listar-estado.component';
import {ListarCidadeComponent} from './cidade/listar/listar-cidade.component';
import {InserirCidadeComponent} from './cidade/inserir/inserir-cidade.component';
import {DeletarCidadeComponent} from './cidade/deletar/deletar-cidade.component';

const routes: Routes = [
  {path: 'index', component: PaginaIncialComponent},
  {path: 'listar-estados', component: ListarEstadoComponent},
  {path: 'listar-cidades', component: ListarCidadeComponent},
  {path: 'inserir-cidades', component: InserirCidadeComponent},
  {path: 'deletar-cidades', component: DeletarCidadeComponent},
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
