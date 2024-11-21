import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactsModule } from '../contacts/contacts.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
