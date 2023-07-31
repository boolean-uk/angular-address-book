import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewFormComponent } from './contact-new-form/contact-new-form.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [
    ContactViewComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactNewFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    ContactViewComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactNewFormComponent,
  ],
})
export class ContactsModule {}
