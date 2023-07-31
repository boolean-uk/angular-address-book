import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [AppComponent, ContactFormComponent, ContactListComponent, ContactViewComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
