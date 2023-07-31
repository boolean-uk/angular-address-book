import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, ContactListComponent, NewContactComponent, ViewContactComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [MenuComponent, ContactListComponent, NewContactComponent, ViewContactComponent],
})
export class LayoutModule {}
