import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [CommonModule, RouterModule, FormsModule, RouterLink],
  exports: [ListComponent, AddComponent, ViewComponent],
})
export class ContactModule {}
