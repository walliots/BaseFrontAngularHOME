import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

import { Endereco } from './cadastro-interface'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CadastroUsuarioService } from 'src/app/services/cadastro-usuario/cadastro-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  backgroundImageUrl: string = 'https://i.imgur.com/kPX6F0F.jpeg';
  backgroundImageUrlRecife: string = 'https://i.imgur.com/EffXBgU.jpeg';
  backgroundImageDemaisTelas: string = 'https://i.imgur.com/UEu8PhM.png';
  backgroungLogo: String = 'https://imgur.com/61tciKy.png';

  cidade!: string;
  logradouro!: string;
  estado!: string;
  bairro!: string;
  cep!: string;

  public loading = false;

  gerarForm = new FormGroup({
    'login': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'senha': new FormControl('', [Validators.required, Validators.minLength(1)]),
  })

  constructor(
    private router: Router,
    private cadastroService: CadastroUsuarioService) { }

  ngOnInit(): void {
    this.loading = true;
  }

  buscarEndereco(cep: string): void {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    axios.get<Endereco>(url)
      .then(response => {
        this.cidade = response.data.localidade;
        this.logradouro = response.data.logradouro;
        this.estado = response.data.uf;
        this.bairro = response.data.bairro
      })
      .catch(error => console.error(error));
  }
  limparCampos(): void {
    this.cidade = '';
    this.logradouro = '';
    this.estado = '';
  }

  saveUser() {
    this.loading = true;
    console.log(this.gerarForm.value)
    
    if (this.gerarForm.valid) {
      this.cadastroService.save(this.gerarForm.value).subscribe((_res) => {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuário cadastrado com sucesso!!',
          showConfirmButton: false,
          timer: 1500
        })

        this.gerarForm.reset();
        this.loading = false;
        this.router.navigate(['/cadastro-usuario'])


      }, (err) => {

        if (err.status == 422) {

          this.loading = false;
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Ops, usuário ou email já existem.',
            showConfirmButton: false,
            timer: 1500
          })
        }
        if(err.status == 400){
          this.loading = false;
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'falta campos',
            showConfirmButton: false,
            timer: 1500
          })

        }
      })

    } else {

      this.loading = false;
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Ops, todos os campos são obrigatórios.',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
