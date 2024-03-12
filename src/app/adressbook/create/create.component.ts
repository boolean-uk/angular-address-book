import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdressbookService } from '../adressbook.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly adressBookService: AdressbookService
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
      this.adressBookService.AddContact(newContact);
      this.contactForm.reset();
    }
  }
}
