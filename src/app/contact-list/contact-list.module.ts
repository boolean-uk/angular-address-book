import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddContactComponent,
    ListContactsComponent,
    ViewContactComponent,
    EditContactComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    AddContactComponent,
    ListContactsComponent,
    ViewContactComponent,
    EditContactComponent,
  ],
})
export class ContactListModule {
  constructor() {
    console.log('ContactListModule loaded.');
  }
}
