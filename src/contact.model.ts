export class Contact {
    firstName: string | null;
    lastName: string | null;
    street: string | null;
    city: string | null;
    constructor(firstName:string | null,lastName:string | null,street:string | null,city:string | null)
    {
        this.firstName=firstName
        this.lastName=lastName
        this.street=street
        this.city=city
    }
  }