import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'contacts',
    component: ContactsListComponent,
  },
  {
    path: 'new-contact',
    component: NewContactComponent,
  },
  {
    path: 'view-contact/:id',
    component: ViewContactComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
