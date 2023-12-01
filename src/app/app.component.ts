import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'paises';

  paises: any[] = [];
  detalhePais: any;

  private url = "http://localhost:3000/paises";


  constructor(
    private http: HttpClient,
  ){}

  ngOnInit(): void {
    this.listarPaises().subscribe( data => {
      this.paises = data;
    })   
  }

  buscarDetalhe(id: number){
    this.detalharPais(id).subscribe(data => {
      this.detalhePais = data;
      console.log(data);
    })
  }

  fecharDetalhe(){
    this.detalhePais = null;
  }

  // Chamadas da API
  listarPaises(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }

  detalharPais(id: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/${id}`);
  }
}
