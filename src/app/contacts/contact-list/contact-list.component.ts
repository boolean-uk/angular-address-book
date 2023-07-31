import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

export type ContactType = {
  firstName: string,
  lastName: string,
  address: string,
  phoneNumber: string
}
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {

  constructor(private router: Router) { }

  contacts: ContactType[] = [{
    firstName: "Wojtek",
    lastName: "Zolkowski",
    phoneNumber: "728",
    address: "Warsaw"
  }]

}
