import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { DisciplinaInterface } from '../shared/interfaces/disciplina.interface';
import { DisciplinasService } from '../shared/services/disciplinas/disciplinas.service';
import { AutenticarService } from '../shared/services/autenticar/autenticar.service';
import { CursosService } from '../shared/services/cursos/cursos.service';
import { CursoInterface } from '../shared/interfaces/curso.interface';
import { CommonModule } from '@angular/common';


interface User{
  nome:String,
}
@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [RouterModule, HeaderComponent,CommonModule],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss',
})
export class DisciplinasComponent {
  disciplinas: Array<DisciplinaInterface> = [];
  disciplinasSemestre: { [key: string]: Array<DisciplinaInterface> } = {};
  curso!:CursoInterface;
  semestres:Array<string> = []
  user:User = {nome:""}

  constructor(
    private disciplinasService: DisciplinasService,
    private cursosService: CursosService,
    private autenticarService: AutenticarService,
  ) { }

  ngOnInit(): void {
    let usuariologado = this.autenticarService.getCredenciais()
    this.user.nome = usuariologado.nome

    this.disciplinasService.getDisciplinasCurso(usuariologado.curso).subscribe((retorno) => {
      retorno.forEach((disciplina) => {
        this.disciplinas.push(disciplina)
      });
      this.disciplinas.forEach(disciplina => {
        let semestre = disciplina.semestre;
        if (!this.disciplinasSemestre[semestre]) {
          this.semestres.push(semestre)
          this.disciplinasSemestre[semestre] = [];
        }
        this.disciplinasSemestre[semestre].push(disciplina);
      });
    });

    this.cursosService.getCurso(usuariologado.curso).subscribe((retorno) => {
      this.curso = retorno
    });

    
  }
}
