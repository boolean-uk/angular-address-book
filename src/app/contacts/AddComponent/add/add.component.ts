import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../../contact';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactsService)
  router = inject(Router)

  myContact: Contact = {id: 0, firstName: '', lastName: '', street: '', city: ''}
 
  constructor() {
    this.contactForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required]
    });
  }

  addContact() {
    this.myContact.firstName = this.contactForm.value.firstname,
    this.myContact.lastName = this.contactForm.value.lastname,
    this.myContact.street = this.contactForm.value.street,
    this.myContact.city = this.contactForm.value.city
    
    this.contactService.addContact(this.myContact)
    this.router.navigate(['contacts'])
  }
}
