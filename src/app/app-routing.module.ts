import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcontactComponent } from './adressbook-module/listcontact/listcontact.component';
import { NewcontactComponent } from './adressbook-module/newcontact/newcontact.component';
import { ViewcontactComponent } from './adressbook-module/viewcontact/viewcontact.component';

// Kanthee: Adding path here..
const routes: Routes = [
  { path: 'home', component: ListcontactComponent},
  { path: 'newcontact', component: NewcontactComponent},
  { path: 'view/:id', component: ViewcontactComponent}
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
