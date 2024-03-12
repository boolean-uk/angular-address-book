import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactsListComponent,
    NewContactComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ContactsModule { }
