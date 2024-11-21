import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AddComponent } from './contact/add/add.component';
import { ListComponent } from './contact/list/list.component';
import { ViewComponent } from './contact/view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, AddComponent, ListComponent, ViewComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule,FormsModule,ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
