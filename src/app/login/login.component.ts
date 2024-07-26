import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AutenticarService } from '../shared/services/autenticar/autenticar.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }

  constructor(private AutenticarService: AutenticarService, private router: Router) {}

  entrar() {
    let login = {
      email: '',
      senha: ''
    };

    login = this.formLogin.value

    if(login.email && login.senha) {
      let retorno = this.AutenticarService.login(login);
      if(retorno){
        window.alert('Usuario logado');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 500);
      }else{
        window.alert('Usuario/senha incorrero');
      }
    } else {
      window.alert('Por favor, preencha os campos');
    }
  }

  cadastrar() {
    window.alert(
      'Processo de recuperação de senha enviado para o e-mail cadastrado!'
    );
  }
}
