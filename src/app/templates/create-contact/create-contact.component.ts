import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent {
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

      const newContact: Omit<Contact, 'id'> = {
        firstName: formValue.firstName!,
        lastName: formValue.lastName!,
        street: formValue.street!,
        city: formValue.city!,
      };

      this.contactService.addContact(newContact as Contact);
      this.contactForm.reset();
    }
  }
}
