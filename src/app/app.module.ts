import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsideComponent } from './dasboardBase/components/aside/aside.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NovoUsuarioComponent } from './components/cadastro-usuario/novo-usuario/novo-usuario.component';
import { EditarUsuarioComponent } from './components/cadastro-usuario/editar-usuario/editar-usuario.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CadastroSetoresComponent } from './components/cadastro-setores/cadastro-setores.component';
import { NovoSetorComponent } from './components/cadastro-setores/novo-setor/novo-setor.component';
import { CadastroDespesaComponent } from './components/cadastro-despesa/cadastro-despesa.component';
import { NovaDespesaComponent } from './components/cadastro-despesa/nova-despesa/nova-despesa.component';
import { EditarDespesaComponent } from './components/cadastro-despesa/editar-despesa/editar-despesa.component';

import { FilePondModule, registerPlugin } from 'ngx-filepond';
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import * as FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import * as FilePondPluginFileEncode from 'filepond-plugin-file-encode';
registerPlugin(FilePondPluginFileValidateType);
registerPlugin(FilePondPluginImagePreview);
registerPlugin(FilePondPluginFileEncode);



@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    LoginComponent,
    AsideComponent,
    NovoUsuarioComponent,
    EditarUsuarioComponent,
    CadastroSetoresComponent,
    NovoSetorComponent,
    CadastroDespesaComponent,
    NovaDespesaComponent,
    EditarDespesaComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,    
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgbModule,
    FilePondModule,


    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
