import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, ContactListComponent, ViewContactComponent, AddContactComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
