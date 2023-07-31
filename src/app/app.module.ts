import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';

@NgModule({
  declarations: [AppComponent, ContactsListComponent, NewContactComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
  