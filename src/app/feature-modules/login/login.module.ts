import { NgModule } from '@angular/core';

// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from '../../shared-modules/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReversePipe } from '../../core-pipes/reverse.pipe';

@NgModule({
  declarations: [LoginPageComponent, SignupPageComponent, ReversePipe],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
