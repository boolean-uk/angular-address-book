export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  email: string;

  constructor(firstName: string, lastName: string, street: string, city: string, id: number, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.city = city;
    this.id = id;
    this.email = email;
  }

}
