import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DisciplinaInterface } from '../../interfaces/disciplina.interface';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  url = 'http://localhost:3000/disciplinas';

  constructor(private httpClient: HttpClient) {}

  getDisciplinasCurso(cursoId:string){
    return this.httpClient.get<Array<DisciplinaInterface>>(this.url+'?curso='+cursoId);

  }

getDisciplinasCursoSemestre(cursoId:string,semestre:string){
  return this.httpClient.get<Array<DisciplinaInterface>>(this.url+'?curso='+cursoId+'?semestre='+semestre);

}
}
