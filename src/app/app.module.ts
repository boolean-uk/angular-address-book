import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Contact } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';

@NgModule({
  declarations: [Contact, ContactComponent, AddNewContactComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [Contact],
})
export class AppModule {}
