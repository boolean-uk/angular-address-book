import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/list/list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { BrowserModule } from '@angular/platform-browser'
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactViewComponent } from './contacts/contact-view/contact-view.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { MenuComponent } from './layout/menu/menu.component';
import { NotFoundPageComponent } from './contacts/not-found-page/not-found-page.component';
const routes: Routes = [
    { path: 'app-list', component: ListComponent },
    { path: 'app-add-contact', component: AddContactComponent},
    { path: 'app-contact-item/:id', component:  ContactItemComponent  },
    { path: 'app-contact-view/:id', component: ContactViewComponent},
    { path: 'app-edit-contact', component: EditContactComponent },
    { path : 'app-menu', component : MenuComponent},
    { path : 'app-not-found-page', component: NotFoundPageComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserModule],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}