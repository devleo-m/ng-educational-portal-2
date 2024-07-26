import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cadastrar',
    component: CadastroAlunoComponent
  },

  {
    path: 'alunos',
    children: [
      {
        path: '',
        component: AlunosComponent
      },
      {
        path: ':id/editar',
        component: CadastroAlunoComponent
      }
    ]
  },
  {
    path: 'disciplinas',
    component: DisciplinasComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
