import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  path: string = "../../../../assets/img/courage.jpg";
  alttext: string="id-img"
  nome : string ='Coragem'
  funcao : string = 'Administrativo'
  
  togbb: boolean = true
  constructor(private route: Router) { }

  ngOnInit(): void {
    
  }


  myFunction() {
    const element = document.getElementById("logoHide");
    element?.classList.toggle("mystyle");

    const miniLogo = document.getElementById("mini-logo-hide");
    miniLogo?.classList.toggle("mystyle")

    const toggleSide = document.getElementById("sidebar")
    toggleSide?.classList.toggle('active');

    console.log('pegou')
  }
  
  sair(){
    window.localStorage.removeItem("token-login")
    this.route.navigate(['/login'])
  }
}
