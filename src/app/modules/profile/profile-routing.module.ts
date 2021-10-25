import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileDashboardComponent } from './components/profile-dashboard/profile-dashboard.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {
    path:'', component: ProfileDashboardComponent, 
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'services', component: ServicesComponent},
      { path: '', redirectTo: '/profile/home', pathMatch: 'full' },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
