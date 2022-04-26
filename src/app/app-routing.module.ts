import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'loginpage',loadChildren:()=>import('./loginpage/loginpage.module').then(mod=>mod.LoginpageModule)  },
  {path:'signuppage',loadChildren:()=>import('./signuppage/signuppage.module').then(mod=>mod.SignuppageModule)},
  {path:'home',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  {path:'',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
