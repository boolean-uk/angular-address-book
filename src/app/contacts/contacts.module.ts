import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AddComponent,
    ViewComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
