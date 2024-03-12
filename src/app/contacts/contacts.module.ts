import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactsListComponent } from './contacts-list/contacts-list.component'
import { ContactViewComponent } from './contact-view/contact-view.component'
import { ContactFormComponent } from './contact-form/contact-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { ContactEditComponent } from './contact-edit/contact-edit.component'

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactViewComponent,
    ContactFormComponent,
    ContactEditComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ContactsListComponent, ContactViewComponent, ContactFormComponent],
})
export class ContactsModule {}
