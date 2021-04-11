import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResResetComponent } from './components/password/res-reset/res-reset.component';
import { ResetComponent } from './components/password/reset/reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'resetpwd',
    component:ResResetComponent
  },
  {
    path:'responsepwd',
    component:ResetComponent
  },
  {
    path:'',
    component:WelcomeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
