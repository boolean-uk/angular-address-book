import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, NewContactComponent, ContactsListComponent, ContactListItemComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
