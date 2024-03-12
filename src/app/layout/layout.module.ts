import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactExtendedComponent } from './contact-extended/contact-extended.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  declarations: [MenuComponent, ContactListComponent, ContactAddComponent, ContactExtendedComponent, ContactEditComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
