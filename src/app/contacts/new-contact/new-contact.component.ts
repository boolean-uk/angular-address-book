import {Component, EventEmitter} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {booleanDomain, emptySpaceFree} from "./contact-validators";
import {Contact, ContactService} from "../contact.service";

@Component({
  selector: 'app-new-contact', templateUrl: './new-contact.component.html', styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
  contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), emptySpaceFree]],
    lastName: ["", [Validators.required, Validators.minLength(3), emptySpaceFree]],
    phoneNumber: ['', Validators.required],
    address: ["", Validators.required],
    email: ["", [Validators.required, Validators.email, booleanDomain]]
  })
  contactAdded = new EventEmitter<Contact>();

  constructor(private fb: FormBuilder, private readonly contactService: ContactService) {
  }

  submit(e: Event) {

    e.preventDefault()

    if (this.contactForm.valid) {
      const newContact: Contact = {
        firstName: this.contactForm.get('firstName')!.value,
        lastName: this.contactForm.get('lastName')!.value,
        phoneNumber: this.contactForm.get('phoneNumber')!.value,
        address: this.contactForm.get('address')!.value,
        email: this.contactForm.get('email')!.value
      }

      this.contactService.addContact(newContact)
      this.contactForm.reset()
    }
  }
}



