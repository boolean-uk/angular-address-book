import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/list/list.component';
import { ProfileComponent } from './contacts/profile/profile.component';
import { CreateComponent } from './contacts/create/create.component';

const routes: Routes = [
  { path: '/', component: ListComponent },
  { path: '/:id', component: ProfileComponent },
  { path: '/create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
