import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormlyTestComponent } from './formly-test.component';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';



@NgModule({
  declarations: [
    FormlyTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyPrimeNGModule,
    FormlyModule.forChild(),
    RouterModule.forChild([
      {path:'',component:FormlyTestComponent}
    ])
  ]
})
export class FormlyTestModule { }
