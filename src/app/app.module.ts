import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactsListComponent } from './address-book/contacts-list/contacts-list.component';
import { ContactViewComponent } from './address-book/contact-view/contact-view.component';
import { ContactAddFormComponent } from './address-book/contact-add-form/contact-add-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactViewComponent,
    ContactAddFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
