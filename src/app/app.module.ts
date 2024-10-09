import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule, RouterLink } from '@angular/router';
import { ContactListModule } from './contact-list/contact-list.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, RouterModule, RouterLink, ContactListModule, ReactiveFormsModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
