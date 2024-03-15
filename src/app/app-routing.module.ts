import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './addressbook/list/list.component';
import { AddComponent } from './addressbook/add/add.component';
import { ViewComponent } from './addressbook/view/view.component';
import { EditComponent } from './addressbook/edit/edit.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'new', component: AddComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
