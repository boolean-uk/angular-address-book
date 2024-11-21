import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, ViewComponent, EditComponent, AddComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [ListComponent, ViewComponent, EditComponent, AddComponent],
})
export class ContactsModule {}
