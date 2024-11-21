import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';

@NgModule({
  declarations: [MenuComponent, ContactlistComponent, AddcontactComponent, ViewcontactComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [MenuComponent,ContactlistComponent],
})
export class LayoutModule {}
