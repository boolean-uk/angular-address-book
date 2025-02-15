import { inject, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACTS } from '../data/contact';
import { Contact } from '../types';
import { ListComponent } from './list/list.component';
import { Router, RouterModule } from '@angular/router';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NotFoundError } from 'rxjs';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AppRoutingModule } from '../app-routing.module';


@Injectable({
  providedIn: 'root',
})

@NgModule({
  declarations: [ListComponent, ContactItemComponent, AddContactComponent, EditContactComponent, NotFoundPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactsModule {
  public contacts: Contact[] = CONTACTS;
  
  constructor(
    private router :Router
  ){}

  public GetContactById(id: number): Contact | undefined {
    return this.contacts.find((c) => c.id ===id);
  }
  public AddContact(contact: Contact){
    contact.id=this.contacts.length+1; 
    this.contacts.push(contact);

  }
  public EditContact(contact: Contact){
    let Oldcontact  = this.contacts.find(c => c.id === Number(contact.id))
    console.log(Oldcontact)
    if (Oldcontact===undefined){
      //route to error page
      console.log("contact does not exist")
      this.router.navigate(['/app-not-found-page']);
    }
    else{
      let index = this.contacts.indexOf(Oldcontact)
      console.log(index)
      this.contacts.splice(index, 1)// reomve old contact details
      this.contacts.push(contact);
    }
    console.log(contact)
    console.log(this.contacts)
  }
 }
