import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './layout/contact-list/contact-list.component';
import { ContactNewComponent } from './layout/contact-new/contact-new.component';
import {ContactViewComponent} from "./layout/contact-view/contact-view.component";

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contact-new', component: ContactNewComponent },
  { path: 'contact-view/:firstName/:lastName', component: ContactViewComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
