import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetComponent } from './components/password/reset/reset.component';
import { ResResetComponent } from './components/password/res-reset/res-reset.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpCallsService } from './services/http-calls.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ResetComponent,
    ResResetComponent,
    WelcomeComponent,
    FooterComponent,
    NavbarComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [HttpCallsService , { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
