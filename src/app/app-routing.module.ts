import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contact/contacts/contacts.component';
import { AddComponent } from './contact/addcontact/addcontact.component';
import { ViewComponent } from './contact/viewcontact/viewcontact.component';
import { EditcontactComponent } from './contact/editcontact/editcontact.component';

const routes: Routes = [
  {path: "contacts", component: ContactsComponent},
  {path: "contacts/add", component: AddComponent},
  {path: "contacts/:id", component: ViewComponent},
  {path: "contacts/edit/:id", component: EditcontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
