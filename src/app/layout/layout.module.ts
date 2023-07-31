import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './contact/contact-list/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';

@NgModule({
  declarations: [MenuComponent, ContactFormComponent, ContactListComponent, ContactDetailsComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
