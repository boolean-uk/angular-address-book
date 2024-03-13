import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './contacts/add/add.component';
import { ListComponent } from './contacts/list/list.component';
import { ViewComponent } from './contacts/view/view.component';

const routes: Routes = [
  { path: 'contacts/add', component: AddComponent },
  { path: 'contacts', component: ListComponent },
  { path: 'contacts/:id', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
