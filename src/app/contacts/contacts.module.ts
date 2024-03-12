import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactsListComponent } from './contacts-list/contacts-list.component'
import { ContactViewComponent } from './contact-view/contact-view.component'
import { ContactFormComponent } from './contact-form/contact-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactViewComponent,
    ContactFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ContactsListComponent, ContactViewComponent, ContactFormComponent],
})
export class ContactsModule {}
