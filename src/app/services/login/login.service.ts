import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly PATH: string = 'http://localhost:8080/api/usuarios/auth';
  constructor(private http: HttpClient)  {}

  logar(login: any): Observable<any> {
 	return this.http.post(`${this.PATH}`, login);
  }

}
