import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {
  contactForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required], 
    })
  }

  addContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: 0,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
      }
      this.contactService.addContact(newContact)
      this.contactForm.reset()
    }
  }

}
