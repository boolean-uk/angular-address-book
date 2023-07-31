import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

@NgModule({
  declarations: [MenuComponent, ContactsListComponent, AddContactComponent, ViewContactComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent, ContactsListComponent, AddContactComponent, ViewContactComponent],
})
export class LayoutModule {}
