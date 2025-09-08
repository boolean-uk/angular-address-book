import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../model/contact';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.email],
      phone: ['', Validators.pattern('^\\+?[0-9]*$')],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  addContact() {
    if (this.contactForm.valid) {
      const newCar: Contact = {
        id: 0,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
      };
      this.contactService.AddContact(newCar);
      this.contactForm.reset();
    }
  }
}
