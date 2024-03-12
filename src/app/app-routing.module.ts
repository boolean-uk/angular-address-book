import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './contacts/view/view.component';
import { CreateComponent } from './contacts/create/create.component';
import { ListComponent } from './contacts/list/list.component';

const routes: Routes = [
  { path: 'contacts', component: ListComponent },
  { path: 'contacts/add', component: CreateComponent },
  { path: 'contacts/:id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
