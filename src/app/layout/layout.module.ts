import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactsListComponent } from './menu/contacts-list/contacts-list.component';
import { NewContactComponent } from './menu/new-contact/new-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewContactComponent } from './menu/view-contact/view-contact.component';

@NgModule({
  declarations: [MenuComponent, ContactsListComponent, NewContactComponent, ViewContactComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
