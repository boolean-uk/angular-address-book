import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/list/list.component';
import { AddComponent } from './contacts/add/add.component';
import { ViewComponent } from './contacts/view/view.component';
import { UpdateComponent } from './contacts/update/update.component';

const routes: Routes = [
  { path: 'contacts', component: ListComponent },
  { path: 'contacts/add', component: AddComponent },
  { path: 'contacts/:id', component: ViewComponent },
  { path: 'contacts/:id/update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
