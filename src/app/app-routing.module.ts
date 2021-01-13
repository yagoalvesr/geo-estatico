import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaginaIncialComponent} from './pagina-incial/pagina-incial.component';
import {EstadoComponent} from './estado/estado.component';
import {CidadeComponent} from './cidade/cidade.component';

const routes: Routes = [
  {path: 'index', component: PaginaIncialComponent},
  {path: 'listar-estados', component: EstadoComponent},
  {path: 'listar-cidades', component: CidadeComponent},
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
