import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { UsuariosService } from '../shared/services/usuarios/usuarios.service';
import { UsuarioInterface } from '../shared/interfaces/usuario.interface';
import { CursosService } from '../shared/services/cursos/cursos.service';
import { CursoInterface } from '../shared/interfaces/curso.interface';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HeaderComponent],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss',
})
export class CadastroAlunoComponent implements OnInit {
  formCadastro!: FormGroup;
  idUsuario: string | undefined;
  cursos!:Array<CursoInterface>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuariosService,
    private cursoService: CursosService,
    private router: Router,
  ){}
  ngOnInit(): void {
    this.idUsuario = this.activatedRoute.snapshot.params['id'];

    
    this.formCadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
      admin: new FormControl(false),
    });
    if (this.idUsuario) {
      this.usuarioService.getUsuario(this.idUsuario).subscribe((retorno) => {
        if (retorno) {
          console.log(retorno)
          this.formCadastro.patchValue(retorno);
        }
      });
    }
    this.cursoService.getCursos().subscribe((retorno) => {
      console.log(retorno)
        this.cursos = retorno;
    });

  }


  submitForm() {
    if (this.formCadastro.valid) {
      if (this.idUsuario) {
        this.editar(this.formCadastro.value);
      } else {
        this.cadastrar(this.formCadastro.value);
      }
      this.router.navigate(['/alunos']);
    } else {
      this.formCadastro.markAllAsTouched();
    }
  }

  cadastrar(usuario: UsuarioInterface) {
    this.usuarioService.postUsuario(usuario).subscribe((retorno) => {
      window.alert('Usuário criado com sucesso');
    });
  }

  editar(usuario: UsuarioInterface) {
    usuario.id = this.idUsuario!;
    this.usuarioService.putUsuario(usuario).subscribe((retorno) => {
      window.alert('Usuário editado com sucesso');
    });
  }
  
}
