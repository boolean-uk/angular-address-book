import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ListComponent } from './contacts/list/list.component';
import { ViewComponent } from './contacts/view/view.component';
import { CommonModule } from '@angular/common';
import { EditComponent } from './contacts/edit/edit.component';

@NgModule({
  declarations: [AppComponent, ViewComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    LayoutModule, 
    CommonModule, 
    AddContactComponent, 
    ListComponent, 
    EditComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
