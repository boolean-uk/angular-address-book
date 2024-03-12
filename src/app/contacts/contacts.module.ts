import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AddComponent,
    ViewComponent,
    ListComponent,
    EditComponent,
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule,
    RouterModule
  ]
})
export class ContactsModule { }
