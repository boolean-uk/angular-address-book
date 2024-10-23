import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  declarations: [ViewComponent, ListComponent, EditComponent, AddComponent],
  exports: [ViewComponent, ListComponent, EditComponent, AddComponent],
})
export class ContactsModule { }