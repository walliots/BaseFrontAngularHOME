import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { sexoEnum } from 'src/app/enumeration/sexoEnum';
import { CadastroUsuarioService } from 'src/app/services/cadastro-usuario/cadastro-usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  title = document.getElementById('title');
  public loading = false;
  idUpdate = this.router.snapshot.paramMap.get('id');
  corPassword: any;
  labelSenha: any;
  

  constructor(
    private router: ActivatedRoute,
    private routerNav: Router,
    private cadastroService: CadastroUsuarioService) {
   }

  
  ngOnInit(): void {
    const title = this.title as HTMLElement
    title.innerHTML = 'Editar usuário'

    this.loading = true
    this.idUpdate = this.router.snapshot.paramMap.get('id');
    if(this.idUpdate !=null){
      this.cadastroService.getUserById(this.idUpdate).subscribe((res)=>{
        this.gerarForm.patchValue({
          nome: res.nome,
          email: res.email,
          senha: '',
          sexo: res.sexo,
          perfil: res.perfil,
          ativo: res.ativo
        })

        this.loading = false;
      })
    }
    setTimeout(() => {
      this.loading = false;
    }, 1000);

  }

  gerarForm = new FormGroup({
    'id': new FormControl(this.idUpdate),
    'nome': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'email': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'senha': new FormControl('', [Validators.required, Validators.minLength(4)]),

    'sexo': new FormControl('', [Validators.required]),
    'perfil': new FormControl('gestao', [Validators.required]),
    'ativo': new FormControl('ativo', [Validators.required]),
  })



  userSaveUpdate(){
    this.loading = true;
    function removeEmptyProperties(obj: any) {
      return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ''));
    }

    const userUpdated = removeEmptyProperties(this.gerarForm.value)

      this.cadastroService.updateUser(userUpdated).subscribe((res)=>{
        
          this.loading = false;

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuário editado com sucesso!!',
            showConfirmButton: false,
            timer: 1500
          })


        

      }, (err) => {

        if(err.status == 422){
          this.loading = false;
          if(err.error.errors.password[0] == 'O campo password precisar ter no Minimo 4 caracter'){
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Ops, o campo senha precisa ter no minímo 4 caracteres.',
              showConfirmButton: false,
              timer: 1500
            })
          }else{
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Ops, o campo confirmar senha precisa ser preenchido igualmente.',
              showConfirmButton: false,
              timer: 1500
            })
          }


        }
      })

  }
}
