import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactsComponent } from './contacts/all-contacts/contacts/contacts.component';
import { NewContactComponent } from './contacts/new-contact/new-contact/new-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details/contact-details.component';

@NgModule({
  declarations: [AppComponent, ContactsComponent, NewContactComponent, ContactDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
