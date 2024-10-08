import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/contact.service';
import { Contacts } from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactsService)
  router = inject(Router)

  myContact: Contacts = {id: 0, firstname: '', lastname: '', street: '', city: ''}
 
  constructor() {
    this.contactForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required]
    });
  }

  addContact() {
    this.myContact.firstname = this.contactForm.value.firstname,
    this.myContact.lastname = this.contactForm.value.lastname,
    this.myContact.street = this.contactForm.value.street,
    this.myContact.city = this.contactForm.value.city
    
    this.contactService.addContact(this.myContact)
    this.router.navigate(['contacts'])
  }
}
