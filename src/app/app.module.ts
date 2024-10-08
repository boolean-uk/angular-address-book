import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RouterLink } from '@angular/router';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ContactModule, RouterLink],
  bootstrap: [AppComponent],
})
export class AppModule {}
