import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';



@NgModule({
  declarations: [
    ContactsListComponent,
    NewContactComponent,
    ContactsViewComponent,
    EditContactComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ContactsModule { }
