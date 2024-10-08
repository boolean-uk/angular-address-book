import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  contacts: any[] = [
    {
      firstName: 'Dave',
      lastName: 'Ames',
      city: 'Southampton',
      street: 'Southampton street 1',
    },
  ];

  addContact(contact: any) {
    this.contacts.push(contact);
  }
}
