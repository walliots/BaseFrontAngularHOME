import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroDespesaService } from 'src/app/services/cadastro-despesa/cadastro-despesa.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-nova-despesa',
  templateUrl: './nova-despesa.component.html',
  styleUrls: ['./nova-despesa.component.css']
})
export class NovaDespesaComponent implements OnInit {

  fileToUpload: File | null = null;
  imgId: any;

  public loading = false;
  title = document.getElementById('title')

  constructor(private service: CadastroDespesaService, private routerNav: Router, private router:ActivatedRoute) { }


  ngOnInit(): void {
    const title = this.title as HTMLElement
		title.innerHTML = 'Nova despesa'
   
  }

  @ViewChild('myPond') myPond: any;

  pondOptions: any = {
      class: 'my-filepond',
      // multiple: true,
      allowFileEncode: true,
      allowImagePreview: true,
      credits: false,
      labelIdle: 'Selecionar foto',
      acceptedFileTypes: 'image/jpeg, image/png',
      server: {
        fetch: null
      },
  };

  pondFiles = [];

  pondHandleInit() {
    // console.log(this.myPond)
    setTimeout(() => {
      this.myPond.addFiles(this.imgId)
    }, 1000);

  }


  pondHandleAddFile(event: any) {
      // console.log('A file was added', event.file.getFileEncodeBase64String());
  }

  pondHandleActivateFile(event: any) {
    console.log('A file was activated', event)
  }


  Form = new FormGroup({

    'caminho_arquivo' : new FormControl('', Validators.required),
    'despesa' : new FormControl('', Validators.required),
    'valor' : new FormControl('', Validators.required),
    'subscribe': new FormControl ('', Validators.required)
  })


  enviarFoto(files: any){
    const file =  files
      this.Form.patchValue({
        caminho_arquivo: file.target.files[0],
      })
   }

  save(){

    if(this.Form.valid){

      var formData: any = new FormData();
      formData.append('valor', this.Form.get('valor')?.value);
      formData.append('caminho_arquivo', this.Form.get('caminho_arquivo')?.value);
      formData.append('subscribe', this.Form.get('subscribe')?.value);

      this.loading = true

      this.service.save(formData).subscribe((res)=>{

        this.loading = false
        this.routerNav.navigate(['/cadastro-despesa'])

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Despesa cadastrada com sucesso!!',
            showConfirmButton: false,
            timer: 1500
          })
      }, (err) => {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Ops, erro.',
            showConfirmButton: false,
            timer: 1500
          })

      })

    }else{

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
