import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    ContactListComponent,
    AddContactComponent,
    ViewContactComponent,
    EditContactComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ContactListComponent, AddContactComponent, ViewContactComponent],
})
export class ContactsModule {}
