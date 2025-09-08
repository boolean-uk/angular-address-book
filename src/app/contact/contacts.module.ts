import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ViewComponent, ListComponent, AddComponent, EditComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ViewComponent, ListComponent],
})
export class ContactsModule {}