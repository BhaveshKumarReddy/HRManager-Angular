import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { HomeComponent } from './HrHome/pages/home/home.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"Home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
