//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    NewContactComponent,
    ContactViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
