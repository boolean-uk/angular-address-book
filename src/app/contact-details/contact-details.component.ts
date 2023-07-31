import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Contact } from '../Contact';
import { CONTACTS } from '../mock-contacts';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  contactID: number | undefined;
  contact: Contact | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.contactID = +params['id']; // The "+" converts the string to a number
      this.contact = this.findContactById(this.contactID);
    });
  }

  // Find a contact by ID in the CONTACTS array
  private findContactById(id: number): Contact | undefined {
    return CONTACTS.find((contact) => contact.id === id);
  }

  // Handle the saveContact event
  onSaveContact(updatedContact: Contact): void {
    // Update the contact in the CONTACTS array
    const index = CONTACTS.findIndex(
      (contact) => contact.id === this.contactID
    );
    if (index !== -1) {
      CONTACTS[index] = updatedContact;
    }

    // Update the local contact object as well
    this.contact = { ...updatedContact };

    alert('Contact saved!');
    history.back();
  }
}
