import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';

//Add edit import here in extension

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AddComponent,
    ListComponent,
    ViewComponent,
  ]
})
export class ContactsModule { }
