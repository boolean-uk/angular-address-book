import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContactsComponentComponent } from './list-contacts-component/list-contacts-component.component';
import { ViewContactComponentComponent } from './view-contact-component/view-contact-component.component';
import { CreateContactComponentComponent } from './create-contact-component/create-contact-component.component';
import { EditContactComponentComponent } from './edit-contact-component/edit-contact-component.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListContactsComponentComponent,
    ViewContactComponentComponent,
    CreateContactComponentComponent,
    EditContactComponentComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ]
})
export class ContactsModule { }
