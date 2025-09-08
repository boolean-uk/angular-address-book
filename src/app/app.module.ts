import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactsModule } from './contacts/contacts.module';
import { ListComponent } from './contacts/list/list.component';
import { AddComponent } from './contacts/add/add.component';
import { EditComponent } from './contacts/edit/edit.component';
import { ViewComponent } from './contacts/view/view.component';

import { RouterModule } from '@angular/router';
const routes = [
  { path: 'contacts', component: ListComponent },
  { path: 'contacts/new', component: AddComponent },
  { path: 'contacts/view/:id', component: ViewComponent },
  { path: 'contacts/edit/:id', component: EditComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ContactsModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
