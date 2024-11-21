import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  myContact: Contact = { id: 1, firstName: '', lastName: '', street: '', city: '' };
  contactForm: FormGroup;
  contactService = inject(ContactService);
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  navigateToContacts() {
    this.router.navigate(['/contacts']);
  }

  addContact() {
    const myContact = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };

    this.contactService.addContact(myContact);
    this.navigateToContacts();
  }
}
