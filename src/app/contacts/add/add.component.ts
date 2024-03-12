import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup;
  contactService = inject(ContactService);
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        city: ['', Validators.required],
        street: ['', Validators.required]
      }
    );
  }

  addContact() {
    const myContact = {
      id: this.contactService.contacts.length +1,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      city: this.contactForm.value.city,
      street: this.contactForm.value.street
    }
    this.contactService.addContact(myContact)
  }
}
