import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: [Contact] = [{id: 1, firstName: "linda", lastName: "cool", street: "wallstreet", city: "new york"}]

  constructor(private http: HttpClient) {}

  public AddContact(contact: Contact): void{
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact
  }

  public updateContact(contact: Contact){
    this.contacts.splice(contact.id - 1, 1, contact)
  }
  /*
  ngOnInit(): void {
    console.log("onInit")
    this.http.get("https://boolean-api-server.fly.dev/louisshr/contact")
    .subscribe(data => {
      this.contacts = data
    })
  }*/
}
