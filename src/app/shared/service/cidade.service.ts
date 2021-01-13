import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EstadoModel} from '../model/estado-model';
import {CidadeModel} from '../model/cidade-model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService extends AbstractService {

  private url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.baseUrl + '/cidades';
  }

  recuperarTodasCidades(): Observable<CidadeModel[]> {
    return this.http.get<CidadeModel[]>(this.baseUrl);
  }

  recuperarCidadePorId(id: number): Observable<CidadeModel> {
    return this.http.get<CidadeModel>(`${this.baseUrl}/${id}`);
  }

  inserirCidade(cidade: CidadeModel): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, cidade);
  }

  inserirCidadeList(cidadeList: CidadeModel[]): Observable<CidadeModel[]> {
    return this.http.post<CidadeModel[]>(`${this.baseUrl}`, cidadeList);
  }

  deletarCidadePorId(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}
