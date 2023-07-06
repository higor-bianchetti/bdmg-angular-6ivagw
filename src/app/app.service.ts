import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { CepModel } from './models/cep.model';

@Injectable()
export class AppService {
  private readonly API = 'https://viacep.com.br/ws/30160907/json/';

  constructor(private httpClient: HttpClient) {}

  getCep() {
    return this.httpClient.get<CepModel>(this.API).pipe(take(1));
  }

  getLocalStorage(id: string) {
    return JSON.parse(window.localStorage.getItem(id));
  }

  saveLocalStorage(id: string, cep: CepModel) {
    window.localStorage.setItem(id, JSON.stringify(cep));
  }

  deleteLocalStorage(id: string) {
    window.localStorage.removeItem(id);
  }
}
