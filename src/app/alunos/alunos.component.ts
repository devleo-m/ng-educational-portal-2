import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { UsuariosService } from '../shared/services/usuarios/usuarios.service';
import { UsuarioInterface } from '../shared/interfaces/usuario.interface';
import { CursoInterface } from '../shared/interfaces/curso.interface';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HeaderComponent,CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
})
export class AlunosComponent implements OnInit {
  formPesquisa!: FormGroup;
  usuarios: Array<UsuarioInterface> = [];
  usuariosPesquisa: Array<UsuarioInterface> = [];
  curso!:CursoInterface

constructor(
  private usuarioService:UsuariosService,
  private router: Router,
){}

  ngOnInit(): void {
    this.formPesquisa = new FormGroup({
      pesquisar: new FormControl('', Validators.required),
    });
    this.usuarioService.getUsuarios().subscribe((retorno) => {
      retorno.forEach((usuario) => {
        this.usuarios.push(usuario);
      });
    });
    this.usuariosPesquisa = this.usuarios
  }

  pesquisar() {
    let pesquisa = this.formPesquisa.value.pesquisar
    if (pesquisa) {
      this.usuariosPesquisa = this.usuarios.filter((usuario) =>
        usuario.nome?.toUpperCase().includes(pesquisa!.toUpperCase())
      );
    } else {
      this.usuariosPesquisa = this.usuarios;
    }
  }


  editar(id:string) {
    this.usuarioService.getUsuario(id).subscribe((retorno) => {
      console.log(retorno.id)
      this.router.navigate(['/alunos/'+retorno.id+'/editar']);
    });
  }

  excluir(id:string) {
    this.usuarioService.delete(id).subscribe(() =>{
      window.location.reload();
    })
    
  }
}
