import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import {MatToolbarModule} from '@angular/material/toolbar';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'terminos', component: TerminosComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule)},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
