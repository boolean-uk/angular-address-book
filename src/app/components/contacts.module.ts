import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



// TODO: DOCUMENT THIS FILE PROPERLY FOR FUTURE REFERENCE


@NgModule({
  declarations: [
    ContactFormComponent,
    EditComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ContactFormComponent,
    EditComponent,
    ListComponent,
    ViewComponent
  ]
})
export class ContactsModule {}