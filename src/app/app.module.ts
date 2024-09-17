import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactListComponent } from './contacts-list/contacts-list.component'; 
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    CreateContactComponent,
    ViewContactComponent,
    EditContactComponent,
    DeleteContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}