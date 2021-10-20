import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FeaturedModule } from './components/featured/featured.module';
import { NgFallimgModule } from 'ng-fallimg';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
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
