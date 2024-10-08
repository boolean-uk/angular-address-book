import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  contactForm: FormGroup
  cService: ContactsService

  contact: Contact | null = null
  contactId: Number

  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute
  ) {
    this.cService = this.contactService
    this.contactId = Number(route.snapshot.paramMap.get('id'))
    this.contact = this.cService.GetById(
      Number(this.contactId) 
    )
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    })
  }

  editContact(): void {
    const updatedContact: Contact = {
      id: 0,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    }
    this.cService.EditContact(updatedContact, this.contactId);
    this.contactForm.reset()
  }
}
