import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactListComponent,
    NewContactComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ContactComponent,
    NewContactComponent,
    ContactListComponent,
    RouterModule
  ]
})
export class ContactsModule { }
