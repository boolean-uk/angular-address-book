import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'contacts', component: ListComponent },
      { path: 'contacts/add', component: AddComponent },
      { path: 'contacts/view/:id', component: ViewComponent }
    ]),
    ReactiveFormsModule
  ],
  exports: [
    ListComponent,
    AddComponent,
    ViewComponent
  ]
})
export class ContactsModule { }
