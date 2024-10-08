import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Contacts/list/list.component';
import { AddComponent } from './Contacts/add/add.component';
import { ViewComponent } from './Contacts/view/view.component';
import { EditComponent } from './Contacts/edit/edit.component';

const routes: Routes = [
  {path :'contacts', component : ListComponent },
  {path : 'contacts/Add', component : AddComponent},
  {path : 'contacts/:id', component : ViewComponent},
  { path: 'contacts/:id/edit', component: EditComponent }, // Add this route
  {path :  '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
