import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  declarations: [AppComponent, ContactListComponent, ContactFormComponent, ContactViewComponent, ContactEditComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
