import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { AdressbookModuleModule } from './adressbook-module/adressbook-module.module';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    LayoutModule,
    AdressbookModuleModule]
    ,
  bootstrap: [AppComponent],
})
export class AppModule {}
