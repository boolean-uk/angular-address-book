import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewFormComponent } from './contact-new-form/contact-new-form.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactEditFormComponent } from './contact-edit-form/contact-edit-form.component';

@NgModule({
  declarations: [
    ContactViewComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactNewFormComponent,
    ContactEditFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [
    ContactViewComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactNewFormComponent,
  ],
})
export class ContactsModule {}
