import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactCreationComponent } from './contact-creation/contact-creation.component';

@NgModule({
  declarations: [AppComponent, ContactsListComponent, ContactViewComponent, ContactCreationComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
