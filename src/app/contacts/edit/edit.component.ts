import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  contactForm: FormGroup;
  cservice: ContactsService;
  contact:Contact|null = null;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.cservice = this.contactService;
    this.contact = this.contactService.GetContactById(Number(route.snapshot.paramMap.get('id')));

    if(this.contact) {
      this.contactForm.patchValue(this.contact);
    }
  }

  updateContact(): void {
    if(this.contact) {
      const updatedContact: Contact = {
        id: this.contact.id,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };
      this.cservice.UpdateContact(updatedContact);
    }
  }
}