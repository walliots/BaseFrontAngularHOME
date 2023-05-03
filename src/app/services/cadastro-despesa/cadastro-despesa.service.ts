import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroDespesaService {

  private readonly PATH_SAVE ='despesa/'
  private readonly PATH_LIST_ID ='despesa/get/'
  private readonly PATH_DELETE = 'despesa/delete/'
  private readonly PATH_UPDATE = 'despesa/'
  private readonly PATH_LIST ='despesa/list/'

  constructor(private http: HttpClient) { }

  save(data: any):Observable<any>{
    return this.http.post(env.baseApiUrl+this.PATH_SAVE, data)
  }
  update(){

  }
  delete(){

  }
  list(){

  }

}
