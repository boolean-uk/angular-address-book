import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Contact } from 'src/types';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class AddComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: 0,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };
      this.contactService.AddContact(newContact);
      this.contactForm.reset();
    }
  }
}
