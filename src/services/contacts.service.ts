import { Injectable } from '@angular/core';
import { CONTACTS } from 'src/data/contacts';
import { Contact } from 'src/app/contacts/models/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  public contacts: Contact[] = CONTACTS 
  
  public AddPet(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
  }

  public getContactById(id: number | null ){
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact){
      return null;
    }
    return contact;
  }
}


//entry to "dataset"

//this ContactService is similar to the DbContext.