import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewComponent, ListComponent, EditComponent, AddComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [ViewComponent, ListComponent, EditComponent, AddComponent],
})
export class ContactsModule { }
