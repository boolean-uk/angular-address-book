import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { CommonModule } from '@angular/common';
import { AddressbookModule } from './addressbook/addressbook.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, CommonModule, AddressbookModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
