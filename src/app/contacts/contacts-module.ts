import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View } from './view/view';
import { Add } from './add/add';
import { List } from './list/list';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    View,
    Add,
    List
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    Add,
    View,
    List
  ]
})
export class ContactsModule { }
