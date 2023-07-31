import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import {FormsModule} from "@angular/forms";
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [MenuComponent, ContactListComponent, ContactNewComponent, ContactViewComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
