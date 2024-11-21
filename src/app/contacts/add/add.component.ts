import { Component, inject } from '@angular/core';
import { Contact } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  myContact: Contact = {id: 1, firstName: "", lastName: "", street: "", city: ""};
  contactForm: FormGroup;
  contactService = inject(ContactsService);
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addContact() {
    this.myContact = {
      id: this.contactService.contacts.length+1,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.addContact(this.myContact);
    this.router.navigate(["/contacts"])
  }
}
