import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './addcontact/addcontact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ViewComponent } from './viewcontact/viewcontact.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditcontactComponent } from './editcontact/editcontact.component';

@NgModule({
  declarations: [ContactsComponent, AddComponent, ViewComponent, EditcontactComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, RouterLink, BrowserModule ],
  exports: [AddComponent, ContactsComponent, ViewComponent, EditcontactComponent],
})
export class ContactsModule {}