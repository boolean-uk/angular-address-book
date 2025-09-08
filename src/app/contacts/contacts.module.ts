import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AppRoutingModule } from "src/app/app-routing.module";
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
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AddComponent,
    EditComponent,
    ListComponent,
    ViewComponent
  ]
})
export class ContactsModule { }
