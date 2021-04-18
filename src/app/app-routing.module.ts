import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResResetComponent } from './components/password/res-reset/res-reset.component';
import { ResetComponent } from './components/password/reset/reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate:[BeforeLoginService]
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate:[BeforeLoginService]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AfterLoginService]
  },
  {
    path:'resetpwd',
    component:ResResetComponent,
    canActivate:[BeforeLoginService]
  },
  {
    path:'responsepwd',
    component:ResetComponent,
    canActivate:[BeforeLoginService]
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
