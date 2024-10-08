import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'add', component: CreatecontactComponent },
];

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [MenuComponent],
})
export class LayoutModule {}
