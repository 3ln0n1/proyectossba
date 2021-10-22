import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FeaturedModule } from './components/featured/featured.module';
import { NgFallimgModule } from 'ng-fallimg';
import { PerfilComponent } from './components/perfil/perfil.component';



import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    MatButtonModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FeaturedModule,
    NgFallimgModule.forRoot({
      default:'/assets/ImgMAPFRE/logoMAPFRE.png'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
