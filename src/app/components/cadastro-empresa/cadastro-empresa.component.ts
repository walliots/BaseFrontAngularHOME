import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

import { Endereco } from './cadastro-interface'; 

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  backgroundImageUrl: string = 'https://i.imgur.com/kPX6F0F.jpeg';
  backgroundImageUrlRecife: string = 'https://i.imgur.com/EffXBgU.jpeg';
  backgroundImageDemaisTelas: string = 'https://imgur.com/A4le7MO.png';
  backgroungLogo: String = 'https://imgur.com/61tciKy.png';

  cidade!: string;
  logradouro!: string;
  estado!: string;
  bairro!: string;
  cep!: string;

  constructor() { }

  ngOnInit(): void {
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

}
