import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  contacts : Contact[] =[{firstname: "John",lastname:"Smith",street:"Marszalkowska", city:"Warsaw"}];
  constructor() { }

  getContacts(){
      return this.contacts;
  }

  addContact(newContact : Contact){
    this.contacts.push(newContact);
  }

  getContact(id : number){
    return this.contacts[id];
  }

}


export class Contact{
  constructor(firstname : string, lastname:string, street: string, city: string){
    this.firstname =firstname;
    this.lastname = lastname;
    this.street = street;
    this.city = city;
  }

  firstname: string;
  lastname: string;
  street: string;
  city: string;  
}
