import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // senhaIncorreta: boolean = false;
 

  constructor(
    private router: Router,
    private loginService: LoginService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
   
  }

  form = new FormGroup({
    login: new FormControl ('', [Validators.required, Validators.email]),
    senha: new FormControl ('', [Validators.required, Validators.minLength(3)])
  });




  logar() {
    if (this.form.invalid) {
      return;
    }

    const login: any = this.form.value;
    this.loginService.logar(login)
      .subscribe(
        (res) => {       
          console.log(res.token)
          this.router.navigate(['cadastro-usuario'])
          window.localStorage.setItem("token-login", res.token)
        },
        (err) => {
          console.log(this.form.value)
          // window.localStorage.removeItem("token")
          // this.route.navigate(['/login'])
          let status = err.status
          let msg: string;
          if(status == 403){
            console.log('senha errada')
            // this.senhaIncorreta = true 
            setTimeout(() => {
              // this.senhaIncorreta = false
              this.snackBar.open(msg = "Senha ou E-mail incorretos", "Erro", { duration: 5000 });
            }, 4000);
          }else if(status == 412){
            console.log('email errado')
            this.snackBar.open(msg = "Senha ou E-mail incorretos", "Erro", { duration: 5000 }); 
            // this.senhaIncorreta = true
            setTimeout(() => {
              // this.senhaIncorreta = false
            }, 4000);
          }else if (status == 401){
            setTimeout(() => {
              this.snackBar.open(msg= 'Erro tente novamente em instantes', "Erro", { duration: 5000 });
            }, 4000);
          }
        }
      );
  }

}
