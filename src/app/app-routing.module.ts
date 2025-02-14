import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './contact/add/add.component';
import { ListComponent } from './contact/list/list.component';
import { ViewComponent } from './contact/view/view.component';
import { EditComponent } from './contact/edit/edit.component';

const routes: Routes = [
  {path: "Contacts", component: ListComponent},
  {path: "Contacts/Add", component: AddComponent},
  {path: "Contacts/:id", component:ViewComponent},
  {path: "Contacts/Edit/:id", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
