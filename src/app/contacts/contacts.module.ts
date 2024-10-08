import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListComponent, ViewComponent, AddComponent],
  imports: [ CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ListComponent, ViewComponent, AddComponent]
})
export class ContactsModule { }
