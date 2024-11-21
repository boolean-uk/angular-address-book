import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './people/list/list.component';
import { AddComponent } from './people/add/add.component';
import { ViewComponent } from './people/view/view.component';
import { EditComponent } from './people/edit/edit.component';

const routes: Routes = [
  {path: 'contacts', component: ListComponent},
  {path: 'contacts/add', component: AddComponent},
  {path: 'contacts/:id', component: ViewComponent},
  {path: 'contacts/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
