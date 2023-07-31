import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../Contact';
import { CONTACTS } from '../mock-contacts';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  @Input() contactID: number | undefined; // Input contact ID for editing
  @Output() saveContact = new EventEmitter<Contact>(); // Output event to save the contact

  newContact: Contact = {
    id: CONTACTS.length + 1,
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  };

  // Determine whether the form is used for editing or adding a new contact
  get isEditMode(): boolean {
    return !!this.contactID;
  }

  // If the contactID input is provided, set it as the initial value for editing
  ngOnInit(): void {
    if (this.contactID) {
      const existingContact = this.findContactById(this.contactID);
      if (existingContact) {
        this.newContact = { ...existingContact };
      }
    }
  }

  // Find a contact by ID in the CONTACTS array
  private findContactById(id: number): Contact | undefined {
    return CONTACTS.find((contact) => contact.id === id);
  }

  // Handler for the save button
  onSave(): void {
    // Emit the contact to the parent component to save
    this.saveContact.emit(this.newContact);

    // If it was in edit mode, reset the form
    if (this.isEditMode) {
      this.newContact = {
        id: 0,
        firstName: '',
        lastName: '',
        street: '',
        city: '',
      };
    }
  }
}
