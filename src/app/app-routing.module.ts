import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/featured/first-component/first-component.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TerminosComponent } from './components/terminos/terminos.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'first-component', component:FirstComponentComponent},
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
