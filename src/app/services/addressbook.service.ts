import { Injectable } from '@angular/core';

export class AddressEntry {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    street: string,
    city: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.city = city;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AddressbookService {
  people: AddressEntry[] = [];

  constructor() {
    this.people.push(
      new AddressEntry(1, 'John', 'Doe', '123 Main St', 'Anytown'),
      new AddressEntry(2, 'Jane', 'Smith', '456 Elm St', 'Othertown'),
      new AddressEntry(3, 'Alice', 'Johnson', '789 Oak St', 'Somewhere')
    );
  }

  addUser(
    id: number,
    firstName: string,
    lastName: string,
    street: string,
    city: string
  ) {
    const newPerson = new AddressEntry(id, firstName, lastName, street, city);
    this.people.push(newPerson);
  }
}
