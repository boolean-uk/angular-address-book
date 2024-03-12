import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  found = true;
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService
  ) {
    this.contactForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  editContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: parseInt(this.contactForm.value.id),
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        address: this.contactForm.value.address,
      };
      if (this.contactService.CheckContact(newContact)) {
        this.found = true;
        this.contactService.EditContact(newContact);
        this.contactForm.reset();
      } else {
        this.found = false;
      }
    }
  }
}
