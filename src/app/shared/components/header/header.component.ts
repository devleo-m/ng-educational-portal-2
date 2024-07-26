import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { AutenticarService } from '../../services/autenticar/autenticar.service';

interface User{
  nome:String,
  admin:boolean
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() user:User = {nome:"Fulano",admin:true}
  showSideBar = false

constructor(private AutenticarService:AutenticarService){}

  ngOnInit(){
    let usuariologado = this.AutenticarService.getCredenciais()
    this.user.nome = usuariologado.nome
    this.user.admin = usuariologado.admin
    
  }
  callSidebar(){
    this.showSideBar = true
  }
  closeSidebar(){
    this.showSideBar = false
  }
}
