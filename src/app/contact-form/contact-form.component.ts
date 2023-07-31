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
    email: '',
    street: '',
    city: '',
  };

  // Getters to check if fields are invalid
  get firstNameInvalid(): boolean {
    return this.isFirstNameInvalid();
  }

  get lastNameInvalid(): boolean {
    return this.isLastNameInvalid();
  }

  get emailInvalid(): boolean {
    return this.isEmailInvalid();
  }

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

  // Check if the first name is invalid
  private isFirstNameInvalid(): boolean {
    return (
      this.newContact.firstName.length < 3 ||
      /\s/.test(this.newContact.firstName)
    );
  }

  // Check if the last name is invalid
  private isLastNameInvalid(): boolean {
    return (
      this.newContact.lastName.length < 3 || /\s/.test(this.newContact.lastName)
    );
  }

  // Check if the email is invalid
  private isEmailInvalid(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@boolean\.co\.uk$/;
    return !emailRegex.test(this.newContact.email);
  }

  // Check if the entire form is invalid
  get formInvalid(): boolean {
    return (
      this.isFirstNameInvalid() ||
      this.isLastNameInvalid() ||
      this.isEmailInvalid()
    );
  }

  // Handler for the save button
  onSave(): void {
    // If the form is invalid, prevent saving

    if (this.formInvalid) {
      alert('Please fill in all fields correctly!');
      return;
    }

    // Emit the contact to the parent component to save
    this.saveContact.emit(this.newContact);

    // If it was in edit mode, reset the form
    if (this.isEditMode) {
      this.newContact = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
      };
    }
  }
}
