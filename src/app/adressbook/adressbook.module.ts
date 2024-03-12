import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    CreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdressbookModule { }
