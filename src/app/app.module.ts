import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ListComponent } from './contacts/list/list.component';
import { ContactsModule } from './contacts/contacts.module';
import { CommonModule } from '@angular/common';
import { EditComponent } from './contacts/edit/edit.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ContactsModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
