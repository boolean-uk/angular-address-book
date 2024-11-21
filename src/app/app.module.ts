import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MenuComponent } from './layout/menu/menu.component';
import { NewContactComponent } from './layout/new-contact/new-contact.component';
import { ViewContactComponent } from './layout/view-contact/view-contact.component';
import { ContactListComponent } from './layout/contact-list/contact-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
