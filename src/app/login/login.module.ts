import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginnComponent } from './loginn/loginn.component';



@NgModule({
  declarations: [
    LoginnComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    LoginnComponent
  ]
})
export class LoginModule { }
