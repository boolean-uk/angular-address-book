import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateContactComponent } from './update-contact/update-contact.component';

@NgModule({
  declarations: [
    MenuComponent,
    ContactsListComponent,
    ViewContactComponent,
    CreateContactComponent,
    UpdateContactComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    MenuComponent,
    ContactsListComponent,
    ViewContactComponent,
    CreateContactComponent,
    UpdateContactComponent,
  ],
})
export class LayoutModule {}
