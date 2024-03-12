import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFormComponent } from '../address-book-components/add-form/add-form.component';
import { ContactViewPageComponent } from '../address-book-components/contact-view-page/contact-view-page.component';
import { ContactsListComponentComponent } from '../address-book-components/contacts-list-component/contacts-list-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AddFormComponent, ContactViewPageComponent, ContactsListComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [AddFormComponent, ContactViewPageComponent, ContactsListComponentComponent]
})
export class AddressbookModule { }
