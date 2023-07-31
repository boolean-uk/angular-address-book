import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, ContactFormComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
