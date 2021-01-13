import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EstadoModel} from '../model/estado-model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService extends AbstractService {

  private url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.baseUrl + '/estados';
  }

  recuperarTodosEstados(): Observable<EstadoModel[]> {
    return this.http.get<EstadoModel[]>(this.url);
  }

  recuperarEstadoPorId(id: number): Observable<EstadoModel> {
    return this.http.get<EstadoModel>(`${this.url}/${id}`);
  }
}
