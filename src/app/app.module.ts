import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, 
    BrowserModule, 
    LayoutModule, 
    RouterModule, 
    ContactsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
