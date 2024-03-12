import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AddComponent } from './contacts/add/add.component';
import { EditComponent } from './contacts/edit/edit.component';
import { ListComponent } from './contacts/list/list.component';
import { CommonModule } from '@angular/common';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, CommonModule, ContactsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
