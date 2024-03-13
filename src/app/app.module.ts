import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AddComponent } from './contacts/add/add.component';
import { ListComponent } from './contacts/list/list.component';
import { ViewComponent } from './contacts/view/view.component';
import { EditComponent } from './contacts/edit/edit.component';

@NgModule({
  declarations: [AppComponent, ListComponent, ViewComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, AddComponent, EditComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
