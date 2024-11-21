import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path: '', component: ListComponent },
  {path: 'add', component: EditComponent},
  {path: 'contact/:id', component: ViewComponent},
  {path: 'contact/:id/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

