import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignuppageRoutingModule } from './signuppage-routing.module';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignuppageRoutingModule
  ]
})
export class SignuppageModule { 
  constructor(){
    console.log("sign up page")
  }
}
