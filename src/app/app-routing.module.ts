import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './adressbook/list/list.component';
import { ViewComponent } from './adressbook/view/view.component';
import { CreateComponent } from './adressbook/create/create.component';

const routes: Routes = [
  {path: "contacts", component: ListComponent},
  {path: "contacts/:id", component: ViewComponent},
  {path: "contacts/create", component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
