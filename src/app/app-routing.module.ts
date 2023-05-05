import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroDespesaComponent } from './components/cadastro-despesa/cadastro-despesa.component';
import { EditarDespesaComponent } from './components/cadastro-despesa/editar-despesa/editar-despesa.component';
import { NovaDespesaComponent } from './components/cadastro-despesa/nova-despesa/nova-despesa.component';
import { CadastroSetoresComponent } from './components/cadastro-setores/cadastro-setores.component';
import { NovoSetorComponent } from './components/cadastro-setores/novo-setor/novo-setor.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { EditarUsuarioComponent } from './components/cadastro-usuario/editar-usuario/editar-usuario.component';
import { NovoUsuarioComponent } from './components/cadastro-usuario/novo-usuario/novo-usuario.component';
import { LoginComponent } from './components/login/login.component';

import { VerificacaoLoginGuard } from './verificacao-login.guard';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
	{path: '', redirectTo: '/app-landing-page', pathMatch: 'full'},
	{path: 'app-landing-page', component: LandingPageComponent},
	{ path: 'login', component: LoginComponent },
	{
		path: '',
		children: [
			{
				path: 'cadastro-usuario',
				component: CadastroUsuarioComponent,
			},
			{
				path: 'novo-usuario',
				component: NovoUsuarioComponent,
			},
			{
				path: 'novo-usuario/:id',
				component: NovoUsuarioComponent,
			},
			{
				path: 'editar-usuario',
				component: EditarUsuarioComponent,
			},
			{
				path: 'editar-usuario/:id',
				component: EditarUsuarioComponent,
			},
			{
				path: 'cadastro-setores',
				component: CadastroSetoresComponent,
			},
			{
				path: 'cadastro-setores/:id',
				component: CadastroSetoresComponent,
			},
			{
				path: 'novo-setor',
				component: NovoSetorComponent,
			},
			{
				path: 'novo-setor/:id',
				component: NovoSetorComponent,
			},
			{
				path: 'cadastro-despesa',
				component: CadastroDespesaComponent,
			},
			{
				path: 'cadastro-despesa/:id',
				component: CadastroDespesaComponent,
			},
			{
				path: 'nova-despesa',
				component: NovaDespesaComponent,
			},
			{
				path: 'editar-despesa',
				component: EditarDespesaComponent,
			},

		],
		canActivate: [VerificacaoLoginGuard]
	},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
