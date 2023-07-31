import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {ContactListComponent} from "./layout/contact-list/contact-list.component";
import {NewContactComponent} from "./layout/new-contact/new-contact.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, NewContactComponent, ContactListComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
