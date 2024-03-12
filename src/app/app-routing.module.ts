import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponentComponent } from './address-book-components/contacts-list-component/contacts-list-component.component';

const routes: Routes = [
  { path: '', component: ContactsListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
