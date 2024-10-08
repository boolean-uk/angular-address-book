import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { ViewcontactsComponent } from './viewcontacts/viewcontacts.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { RouterModule } from '@angular/router';
import { EditcontactComponent } from './editcontact/editcontact.component';

@NgModule({
  declarations: [
    MenuComponent,
    CreatecontactComponent,
    ViewcontactsComponent,
    ViewcontactComponent,
    EditcontactComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    MenuComponent,
    CreatecontactComponent,
    ViewcontactsComponent,
    ViewcontactComponent,
    EditcontactComponent,
  ],
})
export class LayoutModule {}
