import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact, ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly ContactsService: ContactsService
  ) {
    this.contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  addContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: 0,
        fullName: this.contactForm.value.fullName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };
      this.ContactsService.AddContact(newContact);
      this.contactForm.reset();
    }
  }
}
