import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { RouterModule } from '@angular/router';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditIndividualContactComponent } from './edit-individual-contact/edit-individual-contact.component';

@NgModule({
  declarations: [ContactsListComponent, CreateContactComponent, ViewContactComponent, EditContactComponent, EditIndividualContactComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ContactsListComponent, CreateContactComponent, ViewContactComponent]
})

export class ContactsModule {}