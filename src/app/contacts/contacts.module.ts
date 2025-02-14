import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactFormComponent,
    ContactViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ]
})
export class ContactsModule { } 