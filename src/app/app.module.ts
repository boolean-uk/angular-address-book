import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

@NgModule({
  declarations: [AppComponent, ContactListComponent, ContactNewComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule,  FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
