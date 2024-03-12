import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component'
import { ContactViewComponent } from './contacts/contact-view/contact-view.component'
import { ContactFormComponent } from './contacts/contact-form/contact-form.component'

const routes: Routes = [
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contacts/new', component: ContactFormComponent },
  { path: 'contacts/:contactId', component: ContactViewComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
