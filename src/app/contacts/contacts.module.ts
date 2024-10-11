import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [ContactFormComponent, ContactListComponent, ContactViewComponent, EditFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [ContactFormComponent, ContactListComponent, ContactViewComponent, EditFormComponent]
})
export class ContactsModule { }
