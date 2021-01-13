import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CidadeModel} from '../model/cidade-model';
import {RetornoModel} from '../model/retorno-model';

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends AbstractService {

  private url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.baseUrl + '/cidades';
  }

  recuperarTodasCidades(): Observable<CidadeModel[]> {
    return this.http.get<CidadeModel[]>(this.url);
  }

  recuperarCidadePorId(id: number): Observable<CidadeModel> {
    return this.http.get<CidadeModel>(`${this.url}/${id}`);
  }

  inserirCidade(cidade: CidadeModel): Observable<RetornoModel> {
    return this.http.post<RetornoModel>(`${this.url}`, cidade);
  }

  inserirCidadeList(cidadeList: CidadeModel[]): Observable<RetornoModel> {
    return this.http.post<RetornoModel>(`${this.url}/inserir-cidades`, cidadeList);
  }

  deletarCidadePorId(id: number): Observable<RetornoModel> {
    return this.http.delete<RetornoModel>(`${this.url}/${id}`);
  }
}
