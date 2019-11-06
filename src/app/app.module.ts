import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-modules/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './core-components/header/header.component';
import { FooterComponent } from './core-components/footer/footer.component';
import { SettingsModule } from './feature-modules/settings/settings.module';

import { CustomPreloadingStrategy } from './custom-preloading.service';
import { PageNotFoundComponent } from './core-components/page-not-found/page-not-found.component';
import { NoAccessComponent } from './core-components/no-access/no-access.component';
// import { ReversePipe } from './core-pipes/reverse.pipe';
import { SquarePipe } from './core-pipes/square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    NoAccessComponent,
    //ReversePipe,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    SettingsModule
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
