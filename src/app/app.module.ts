import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [AppComponent, AddContactComponent, ListContactsComponent, MenuComponent, ContactDetailsComponent],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
