import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    FirstComponentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    FlexLayoutModule
  ],
  exports:[
    FirstComponentComponent
  ]
})
export class FeaturedModule { }
