import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './layout/contact-list/contact-list.component';
import { ContactAddComponent } from './layout/contact-add/contact-add.component';
import { ContactExtendedComponent } from './layout/contact-extended/contact-extended.component';
import { ContactEditComponent } from './layout/contact-edit/contact-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/add', component: ContactAddComponent },
  { path: 'contacts/:id', component: ContactExtendedComponent },
  { path: 'contacts/:id/edit', component: ContactEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
