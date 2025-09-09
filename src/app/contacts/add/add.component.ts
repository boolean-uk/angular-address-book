import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contacts';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup;
  cservice: ContactsService

  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService
  ) {
      this.contactForm = this.formBuilder.group({
        firstname: ['', Validators.required],   
        lastname: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required]
      });
    this.cservice = this.contactService;
  }

  addContact(): void {
    const newContact: Contact = {
      id: 0,
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city
    };
    this.cservice.AddContact(newContact);
    this.contactForm.reset();
  }
}