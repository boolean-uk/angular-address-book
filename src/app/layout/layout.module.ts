import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    MenuComponent,
    ContactComponent,
    ContactsListComponent,
    AddContactComponent,
    ViewContactComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MatDividerModule, MatListModule],
  exports: [
    ContactComponent,
    MenuComponent,
    ContactsListComponent,
    AddContactComponent,
    ViewContactComponent,
  ],
})
export class LayoutModule {}
