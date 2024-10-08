import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './contacts/services/contacts.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ContactsComponent, RouterModule, CommonModule],
  providers: [ContactsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
