import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  protected baseUrl: string;

  constructor() {
    this.baseUrl = 'https://geo-spring.herokuapp.com';
    // this.baseUrl = 'http://localhost:8080';
  }
}
