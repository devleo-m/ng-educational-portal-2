import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AutenticarService } from '../../services/autenticar/autenticar.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() closeSidebar = new EventEmitter();
  @Input() admin=false
  
  constructor(private AutenticarService: AutenticarService, private router: Router) {}

  ngOnInit(){

  }

  fechar(){
    this.closeSidebar.emit()
  }
  sair(){
    setTimeout(() => {
      this.AutenticarService.logout()
      this.router.navigate(['/login']);
    }, 500);
  }


}
