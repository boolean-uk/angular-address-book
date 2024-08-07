import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './layout/contactlist/contactlist.component';
import { AddcontactComponent } from './layout/addcontact/addcontact.component';
import { ViewcontactComponent } from './layout/viewcontact/viewcontact.component';

const routes: Routes = [
  {
    path: 'contact-list',
    component: ContactlistComponent,
    
  },
  {
    path: 'add-contact',
    component: AddcontactComponent,
    
  },
  {
    path: 'contact/:id',
    component: ViewcontactComponent,
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
