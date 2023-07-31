import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: Contact[] = [
    {
      firstName: "A",
      lastName: "B",
      street: "C",
      city: "D"
    }
  ]
}



interface Contact {
  firstName: string,
  lastName: string,
  street: string,
  city: string
}