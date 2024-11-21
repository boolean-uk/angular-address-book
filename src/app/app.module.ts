import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,AddContactComponent, ViewContactComponent, ContactsListComponent, EditContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LayoutModule,
    RouterModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
