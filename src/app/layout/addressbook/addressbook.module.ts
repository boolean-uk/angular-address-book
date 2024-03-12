import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressbookViewComponent } from './addressbook-view/addressbook-view.component';

import { PersonItemComponent } from './person-item/person-item.component';
import { AddressbookService } from '../../services/addressbook.service';
import { SinglePersonViewComponent } from './single-person-view/single-person-view.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddressbookViewComponent,
    PersonItemComponent,
    SinglePersonViewComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [AddressbookViewComponent, SinglePersonViewComponent],
  providers: [AddressbookService],
})
export class AddressbookModule {}
