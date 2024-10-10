import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  declarations: [AppComponent, ContactListComponent, AddContactComponent, ContactProfileComponent, EditContactComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, CommonModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
