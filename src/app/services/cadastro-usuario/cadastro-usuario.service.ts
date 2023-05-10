import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  private readonly PATH: string = '/usuarios/listUser';
  private readonly PATH_USER_ID = 'usuarios/get';
  private readonly PATH_USER: string ='/api/usuarios';

  constructor(private http: HttpClient)  {}

  list(): Observable<any> {
    const token = window.localStorage.getItem('token-login');
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Accept", "application/json").set("Authorization", `Bearer ${token}`);
 	return this.http.get(env.baseApiUrl+this.PATH, {'headers': headers});
  }
  save(data: any): Observable<any>{
    const token = window.localStorage.getItem('token-login');
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Accept", "application/json").set("Authorization", `Bearer ${token}`);
 	return this.http.post(env.baseApiUrl+this.PATH_USER, data, {'headers': headers});
  }
  getUserById(id: any): Observable<any>{
    let ids = id;
    const token = window.localStorage.getItem('token-login');
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Accept", "application/json").set("Authorization", `Bearer ${token}`);
    return this.http.get(`${env.baseApiUrl+this.PATH_USER_ID}/${ids}`, {'headers': headers});
  }
  updateUser(data: any): Observable<any>{
    return this.http.put(`${env.baseApiUrl+this.PATH_USER}`,data);
  }
  deleteUser(id: any){
    let ids = id;
    return this.http.delete(`${env.baseApiUrl+this.PATH_USER}/${ids}`);
  }
}
