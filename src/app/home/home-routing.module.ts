import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DetailpageComponent } from './detailpage/detailpage.component';

const routes: Routes = [
  {path:'courses',component:CoursesComponent},
  {path:'detailpage/:id',component:DetailpageComponent},
  {path:'',redirectTo:'courses',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
