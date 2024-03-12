import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/list/list.component';
import { ViewComponent } from './contacts/view/view.component';
import { AddComponent } from './contacts/add/add.component';

const routes: Routes = [
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'contacts', component: ListComponent},
  {path: 'contacts/:id', component: ViewComponent},
  {path: 'new-contact', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
