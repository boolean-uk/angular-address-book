import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { ViewComponent } from '../view/view.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from '../edit/edit.component';
import { CreateComponent } from '../create/create.component';


@NgModule({
  declarations: [ListComponent,
    ViewComponent,
    CreateComponent,
    EditComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class AdressbookModule { }
