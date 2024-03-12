import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

@NgModule({
  declarations: [ContactsListComponent, CreateContactComponent],
  imports: [CommonModule],
  exports: [ContactsListComponent, CreateContactComponent],
})
export class ContactsModule {}
