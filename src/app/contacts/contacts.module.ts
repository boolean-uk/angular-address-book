import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListComponent, ViewComponent, AddComponent, EditComponent],
  imports: [ CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ListComponent, ViewComponent, AddComponent, EditComponent]
})
export class ContactsModule { }
