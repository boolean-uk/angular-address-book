import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      // Create a new contact object
      const newContact: Omit<Contact, 'id'> = {
        firstName: formValue.firstName!,
        lastName: formValue.lastName!,
        street: formValue.street!,
        city: formValue.city!,
      };

      this.contactService.addContact(newContact as Contact);
      this.contactForm.reset(); // Reset the form
    }
  }
}
