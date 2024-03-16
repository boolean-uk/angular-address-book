import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressbookService } from '../../addressbook.service';
import { Contact } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  route = inject(ActivatedRoute);
  contactService = inject(AddressbookService);
  router = inject(Router);
  contactForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  contact: Contact | null = this.contactService.getContactById(Number(this.id));

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: [this.contact?.firstName, Validators.required],
      lastname: [this.contact?.lastName, Validators.required],
      phone: [this.contact?.phone, Validators.required],
    });
  }

  updateContact() {
    const updatedContact: Contact = {
      id: Number(this.id),
      firstName: this.contactForm.value.firstname,
      lastName: this.contactForm.value.lastname,
      phone: this.contactForm.value.phone,
    };
  
    this.contactService.updateContact(updatedContact);
  
    if (this.contact) {
      this.contact.firstName = updatedContact.firstName;
      this.contact.lastName = updatedContact.lastName;
      this.contact.phone = updatedContact.phone;
    }
  
    this.router.navigate(['/']);
  }
  
}
