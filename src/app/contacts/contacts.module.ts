import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//Add edit import here in extension

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AddComponent,
    ListComponent,
    ViewComponent,
  ]
})
export class ContactsModule { }
