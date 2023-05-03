import { Component, OnInit } from '@angular/core';
import { SetoresModel } from './cadastro-setores.model';

@Component({
  selector: 'app-cadastro-setores',
  templateUrl: './cadastro-setores.component.html',
  styleUrls: ['./cadastro-setores.component.css']
})
export class CadastroSetoresComponent implements OnInit {

  dados: any;
	nome: any;
	public lista: Array<SetoresModel> = [];
	public page = 1;
	public pageSize = 1;

	title = document.getElementById('title')

  constructor() { }

  ngOnInit(): void {
    const title = this.title as HTMLElement
		title.innerHTML = 'Setores'
  }

  delete(){

  }

  search(){
    
  }

}
