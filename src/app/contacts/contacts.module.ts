import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent, EditComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ListComponent, AddComponent, ViewComponent, EditComponent],
})
export class ContactsModule {}
