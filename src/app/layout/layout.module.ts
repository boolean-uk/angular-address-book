import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactListModule } from '../contact-list/contact-list.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, RouterLink, ContactListModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
