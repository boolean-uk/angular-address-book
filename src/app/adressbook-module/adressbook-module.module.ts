import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { ListcontactComponent } from './listcontact/listcontact.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ViewcontactComponent,
    ListcontactComponent,
    NewcontactComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    // The line below...
    ReactiveFormsModule
  ],
  exports: [
    ViewcontactComponent,
    ListcontactComponent,
    NewcontactComponent
  ]
})
export class AdressbookModuleModule { }
