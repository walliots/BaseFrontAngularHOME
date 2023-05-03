import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroUsuarioService } from 'src/app/services/cadastro-usuario/cadastro-usuario.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { UserModel } from './cadastro-usuario.model';

@Component({
	selector: 'app-cadastro-usuario',
	templateUrl: './cadastro-usuario.component.html',
	styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
	dados: any;
	dadosAll: any;
	nome: any;
	public lista: Array<UserModel> = [];
	public page = 1;
	public pageSize = 5;

	title = document.getElementById('title')

	form!: FormGroup;
	constructor(
		private router: Router,
		private fb: FormBuilder,
		private cadastroService: CadastroUsuarioService) { }



	ngOnInit() {


		const title = this.title as HTMLElement
		title.innerHTML = 'Usuários'

		this.cadastroService.list().subscribe((res) => {
			console.log(res)
			this.dados = res
			this.lista = this.dados
		})

	}


	render(){

		this.cadastroService.list().subscribe((res) => {
			console.log(res)
			this.dados = res
			this.lista = this.dados
		})
	}


	delete(id: any, user: any) {
		Swal.fire({
			title: 'Deseja deletar o usuário ' + user + '?',
			text: "Cuidado, esta ação não poderá ser desfeita.",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Sim!!'
		}).then((result) => {
			if (result.isConfirmed) {

				this.cadastroService.deleteUser(id).subscribe((res) => {
					console.log(res, "res==>");
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Usuário deletado com sucesso!!',
						showConfirmButton: false,
						timer: 1500
					})
					setTimeout(() => {
						this.render();
					}, 3000);

				}, (error)=>{
					Swal.fire({
						position: 'center',
						icon: 'error',
						title: 'Falha ao deletar usuário!!',
						showConfirmButton: false,
						timer: 1500
					})
				})
			}
		})




	}

	search(){
		if(this.nome == ""){
		  this.ngOnInit();
		}else{
		  this.lista = this.lista.filter(res=>{
			return res.nome.toLocaleLowerCase().match(this.nome.toLocaleLowerCase());
		  })
		}
	  }

	
}
