import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './contacts/view/view.component';
import { AddComponent } from './contacts/add/add.component';
import { ListComponent } from './contacts/list/list.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'contacts/add', component: AddComponent},
  {path: 'contacts/:id', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
