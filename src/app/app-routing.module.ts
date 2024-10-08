import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path: '', component: ContactListComponent },
  {path: 'add', component: AddContactComponent},
  {path: 'contact/:id', component: ViewContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

