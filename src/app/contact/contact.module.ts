import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AddComponent, EditComponent, ViewComponent, ListComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [AddComponent, ViewComponent, ListComponent, EditComponent],
})
export class ContactModule {}
