import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactViewComponent, ContactlistComponent, ContactFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ContactViewComponent, ContactlistComponent, ContactFormComponent],
})
export class ContactsModule {}