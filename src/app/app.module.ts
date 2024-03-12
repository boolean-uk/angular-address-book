import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AddressbookModule } from './layout/addressbook/addressbook.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormViewComponent } from './layout/contact-form/contact-form-view/contact-form-view.component';

@NgModule({
  declarations: [AppComponent, ContactFormViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AddressbookModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
