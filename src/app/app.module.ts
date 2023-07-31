import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ContactsListComponent, NewContactComponent, ViewContactComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule,  ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}