import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  contactForm: FormGroup;
  id: number = Number(this.route.snapshot.paramMap.get('id'));
  contact: Contact | null = this.contactService.getContactById(this.id);
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute
  ) {
    console.log(this.id);
    console.log(this.contact);
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }
  editContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: this.id,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };
      this.contactService.EditContact(newContact);
    }
  }
}
