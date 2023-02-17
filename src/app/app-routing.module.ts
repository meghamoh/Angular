import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformComponent } from './pages/artform/artform.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
{
  path:'',component:HomepageComponent
},
{
   path:'artform',component:ArtformComponent
   
},
{
  path:'contact',component:ContactComponent
},

{
  path:'signup',component:SignupComponent
},
{
  path:'singlepage',component:SinglepageComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
