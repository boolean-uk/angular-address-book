import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  contactForm: FormGroup;
  contactService = inject(ContactsService);
  router = inject(Router);
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });

    console.log(this.contactService.getAllContacts());
  }
  

  addContact() {
    const myContact = {
      id: this.contactService.contacts.length + 1,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.addContact(myContact);
    this.router.navigate(['contacts']);
    console.log(this.contactService.getAllContacts());
  }
}
