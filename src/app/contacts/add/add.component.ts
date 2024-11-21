import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup;
  contactService = inject(ContactService);
  router = inject(Router);
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
}

addContact() {
  const myContact = {
    id: this.contactService.contacts.length + 1,
    firstname: this.contactForm.value.firstname,
    lastname: this.contactForm.value.lastname,
    street: this.contactForm.value.street,
    city: this.contactForm.value.city
  };
  this.contactService.addContact(myContact);
  this.router.navigate(["contacts"])
}
}
