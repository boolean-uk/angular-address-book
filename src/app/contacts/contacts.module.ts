import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddContactComponent,
    ContactsListComponent,
    EditContactComponent,
    ViewContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddContactComponent,
    ContactsListComponent,
    EditContactComponent,
    ViewContactComponent,

  ],
})
export class ContactsModule { }
