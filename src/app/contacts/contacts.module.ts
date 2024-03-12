import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  exports: [
    AddComponent, 
    ViewComponent,
    ListComponent,
  ]
})
export class ContactsModule { }
