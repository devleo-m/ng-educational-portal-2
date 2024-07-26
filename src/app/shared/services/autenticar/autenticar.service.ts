import { Injectable } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';
import { UsuarioInterface } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {
  usuarioLogado:UsuarioInterface|null = null;
  usuarios: Array<UsuarioInterface> = [];
  constructor(private UsuariosService: UsuariosService) { }

  login(login: { email: string, senha: string }) {
    
    this.UsuariosService.getUsuarios().subscribe((retorno) => {
      retorno.forEach((usuario) => {
        this.usuarios.push(usuario);
      });
    });
    let userMatch = this.usuarios.filter((usuario) => usuario.email === login.email && usuario.senha === login.senha)
    
    if(userMatch.length >0){
      this.usuarioLogado = userMatch[0];
      sessionStorage.setItem('usuarioLogado', JSON.stringify(this.usuarioLogado));
      return true;
    }else{
      return false;
    }     
    
  }

  logout() {
    sessionStorage.removeItem('usuarioLogado');
  }
  getCredenciais(){
    let value = sessionStorage.getItem('usuarioLogado')
    if(value == null){
        return null
    }

    return JSON.parse(value)
  }
}
