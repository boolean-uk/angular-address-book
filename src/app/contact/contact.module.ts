import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule,
  ],
  exports: [
    AddComponent,
    EditComponent,
    ListComponent,
    ViewComponent
  ]
})
export class ContactModule { }
