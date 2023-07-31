import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    NewContactComponent,
    ContactFormComponent,
    ContactDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
