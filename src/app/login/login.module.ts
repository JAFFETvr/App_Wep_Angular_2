import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginnComponent } from './loginn/loginn.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginnComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[
    LoginnComponent
  ]
})
export class LoginModule { }
