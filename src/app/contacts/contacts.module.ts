import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }