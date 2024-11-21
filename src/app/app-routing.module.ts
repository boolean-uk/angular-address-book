import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './contacts/view/view.component';
import { CreateComponent } from './contacts/create/create.component';
import { ListComponent } from './contacts/list/list.component';
import { EditComponent } from './contacts/edit/edit.component';

const routes: Routes = [
  { path: 'contacts', component: ListComponent },
  { path: 'contacts/add', component: CreateComponent },
  { path: 'contacts/:id', component: ViewComponent },
  { path: 'contacts/:id/edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
