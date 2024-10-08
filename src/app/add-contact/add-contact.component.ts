import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  contactForm: FormGroup;
  cService: ContactService;
  router: Router;

  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactService,
    router: Router,
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });

    this.cService = contactService;
    this.router = router;
  }

  addContact() {
    const newContact: Contact = {
      id: 0,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.cService.addContact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/']);
  }
}
