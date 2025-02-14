import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/list/list.component';
import { ViewComponent } from './contacts/view/view.component';
import { AddComponent } from './contacts/add/add.component';
import { EditComponent } from './contacts/edit/edit.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ListComponent,
  },
  {
    path: 'contacts/view/:id',
    component: ViewComponent,
  },
  {
    path: 'contacts/new',
    component: AddComponent,
  },
  {
    path: 'contacts/edit/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
