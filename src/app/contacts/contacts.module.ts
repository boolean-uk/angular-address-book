import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ViewComponent,
    ListComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    AddComponent,
    EditComponent,
    ViewComponent,
    ListComponent
  ]
})
export class ContactsModule { }
