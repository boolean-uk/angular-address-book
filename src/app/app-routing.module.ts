import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcontactsComponent } from './layout/viewcontacts/viewcontacts.component';
import { CreatecontactComponent } from './layout/createcontact/createcontact.component';
import { ViewcontactComponent } from './layout/viewcontact/viewcontact.component';
import { EditcontactComponent } from './layout/editcontact/editcontact.component';

const routes: Routes = [
  { path: 'contacts', component: ViewcontactsComponent },
  { path: 'contacts/add', component: CreatecontactComponent },
  { path: 'contacts/:id', component: ViewcontactComponent },
  { path: 'contacts/:id/edit', component: EditcontactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
