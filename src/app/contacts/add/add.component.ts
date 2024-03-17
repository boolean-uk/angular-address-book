import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../model/contact';
import { ContactService } from 'src/app/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  addContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: this.contactService.contacts.length + 1,
        ...this.contactForm.value
      };
      this.contactService.addContact(newContact);
      this.router.navigate(["contacts"]);
    }
  }
}
