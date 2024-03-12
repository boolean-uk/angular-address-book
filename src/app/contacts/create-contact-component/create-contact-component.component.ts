import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactsService } from '../contacts.service'
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Contact } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact-component',
  templateUrl: './create-contact-component.component.html',
  styleUrls: ['./create-contact-component.component.css']
})
export class CreateContactComponentComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactsService: ContactsService,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }
  navigateToContacts() {
    this.router.navigate(['/contacts']);
  }
  createContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: 0,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city
      };
      this.contactsService.addContact(newContact);
      this.contactForm.reset();
      this.navigateToContacts()
    }
  }
}
