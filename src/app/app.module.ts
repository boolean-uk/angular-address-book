import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AddFormComponent } from './address-book-components/add-form/add-form.component';
import { ContactViewPageComponent } from './address-book-components/contact-view-page/contact-view-page.component';
import { ContactsListComponentComponent } from './address-book-components/contacts-list-component/contacts-list-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddFormComponent, ContactViewPageComponent, ContactsListComponentComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
