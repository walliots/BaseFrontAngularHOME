import { Component, OnInit } from '@angular/core';
import { DespesaModel } from './cadastro-despesa.model';

@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.css']
})
export class CadastroDespesaComponent implements OnInit {

  dados: any;
	nome: any;
	public lista: Array<DespesaModel> = [];
	public page = 1;
	public pageSize = 1;

  title = document.getElementById('title')

  constructor() { }

  ngOnInit(): void {
    const title = this.title as HTMLElement
		title.innerHTML = 'Despesas'
  }

  
  delete(){

  }

  search(){
    
  }

}
