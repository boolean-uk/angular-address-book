import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contact/list/list.component';
import { AddComponent } from './contact/add/add.component';
import { ViewComponent } from './contact/view/view.component';
import { EditComponent } from './contact/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'contacts/add',
    component: AddComponent,
  },
  {
    path: 'contacts/:id',
    component: ViewComponent,
  },
  {
    path: 'contacts/:id/edit',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
