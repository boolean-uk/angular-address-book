import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../interfaces/contact';
import { ContactService } from '../contact.service';
import { namesValidator } from '../validators/namesValidator';
import { emailValidator } from '../validators/emailValidator';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.min(3), namesValidator]],
    lastName: ['', [Validators.required, Validators.min(3), namesValidator]],
    email: ['', [Validators.required, Validators.email, emailValidator]],
    street: ['', Validators.required],
    city: ['', Validators.required],
  });

  contact: Contact | null = null;

  submit() {
    if (this.contactForm.valid) {
      this.contact = {
        id: this.contactService.getId(),
        firstName: this.contactForm.value.firstName!,
        lastName: this.contactForm.value.lastName!,
        email: this.contactForm.value.email!,
        street: this.contactForm.value.street!,
        city: this.contactForm.value.city!,
      };
      this.contactService.addContact(this.contact);
    }

    this.contactForm.reset();
  }
}
