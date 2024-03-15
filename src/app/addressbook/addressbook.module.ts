import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    AddComponent,
    ViewComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AddressbookModule { }
