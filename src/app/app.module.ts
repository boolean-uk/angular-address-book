import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactsModule } from './contact/contacts.module';
import { EditcontactComponent } from './contact/editcontact/editcontact.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ContactsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
