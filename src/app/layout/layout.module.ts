import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { ViewcontactsComponent } from './viewcontacts/viewcontacts.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'contacts', component: ViewcontactsComponent },
  { path: 'contacts/add', component: CreatecontactComponent },
];

@NgModule({
  declarations: [MenuComponent, CreatecontactComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
