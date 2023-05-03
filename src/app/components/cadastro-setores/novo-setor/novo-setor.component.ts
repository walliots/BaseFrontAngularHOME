import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-setor',
  templateUrl: './novo-setor.component.html',
  styleUrls: ['./novo-setor.component.css']
})
export class NovoSetorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  save(){    
  }
  gerarForm = new FormGroup({
    'setor': new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

}
