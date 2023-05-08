import { ENVIRONMENT_INITIALIZER, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderComponent, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
