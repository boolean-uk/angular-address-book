import { Component } from '@angular/core';
import { Contact } from 'src/app/items/Contact';
import { ContactServiceService } from '../contact-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  contacts: Contact[] = [{firstname: "Tim", lastname: "Johnsen", street: "Somewhere 123", city: "Atlantis"}, {firstname: "Allan", lastname: "Burke", street: "Here 777", city: "El Dorado"}]
  subscription: Subscription;
  
  constructor(private contactService: ContactServiceService) {
    this.subscription = this.contactService.currentLink.subscribe((contact) => {this.contacts = [...this.contacts, contact];   
      console.log(this.contacts);
      console.log(contact)
    })
  }

}
