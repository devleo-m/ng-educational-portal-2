import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CursoInterface } from '../../interfaces/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  url = 'http://localhost:3000/cursos';


  constructor(private httpClient: HttpClient) {}
  
  getCursos() {
    return this.httpClient.get<Array<CursoInterface>>(this.url);
  }

  getCurso(id:string) {
    return this.httpClient.get<CursoInterface>(this.url+`/${id}`);
  }

}
