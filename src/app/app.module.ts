import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-modules/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './core-components/header/header.component';
import { FooterComponent } from './core-components/footer/footer.component';
import { SettingsModule } from './feature-modules/settings/settings.module';

// import { LoginModule } from './feature-modules/login/login.module';
// import { LibraryModule } from './feature-modules/library/library.module';
// import { ReportModule } from './feature-modules/report/report.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    SettingsModule
    // LoginModule,
    // LibraryModule,
    // ReportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
