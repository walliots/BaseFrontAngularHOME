import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroUsuarioService } from 'src/app/services/cadastro-usuario/cadastro-usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  public loading = false;


  constructor(
    private router: Router,
    private cadastroService: CadastroUsuarioService) { }


  ngOnInit(): void {
    this.loading = true;
  }

  gerarForm = new FormGroup({
    'nome': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'email': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'senha': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'sexo': new FormControl('', [Validators.required]),
  })

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


