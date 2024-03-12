import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactsListComponent,
    CreateContactComponent,
    ContactComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ContactsListComponent, CreateContactComponent, ContactComponent],
})
export class ContactsModule {}
