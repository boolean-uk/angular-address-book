import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactListPageComponent } from './contact-list-page/contact-list-page.component';
import { NewContactPageComponent } from './new-contact-page/new-contact-page.component';
import { ViewContactPageComponent } from './view-contact-page/view-contact-page.component';

@NgModule({
  declarations: [AppComponent, ContactListPageComponent, NewContactPageComponent, ViewContactPageComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, FormsModule, ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
