import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 

import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ListComponent } from './contacts/list/list.component'; 
import { AddComponent } from './contacts/add/add.component';
import { ViewComponent } from './contacts/view/view.component'; 
import { EditComponent } from './contacts/edit/edit.component';

@NgModule({
  declarations: [AppComponent, ListComponent, AddComponent,ViewComponent, EditComponent], 
  imports: [BrowserModule, AppRoutingModule, LayoutModule,ReactiveFormsModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
