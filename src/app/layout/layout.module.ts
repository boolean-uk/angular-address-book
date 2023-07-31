import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

@NgModule({
  declarations: [MenuComponent, ViewContactComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
