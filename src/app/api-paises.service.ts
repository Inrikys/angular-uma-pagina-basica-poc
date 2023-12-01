import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {

  private url = "localhost:3000/paises"

  constructor(
    private http: HttpClient
  ) { }

  listarPaises(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }

}
