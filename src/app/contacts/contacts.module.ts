import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [AddComponent, ListComponent, ViewComponent, EditComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [ListComponent, AddComponent, ViewComponent],
})
export class ContactsModule {}
