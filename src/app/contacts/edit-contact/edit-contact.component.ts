import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsModule } from '../contacts.module';
import { Contact } from 'src/app/types';

@Component({
  selector: 'app-edit-contact',
  standalone: false,
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {

    ContactForm: FormGroup;
    constructor(
      private readonly formBuilder: FormBuilder,
      private readonly ContactsModule: ContactsModule,
      private readonly router: Router
    ) {
      this.ContactForm= this.formBuilder.group({
        id: [''],
        firstName: [''],
        lastName: [''],
        street: [''],
        city: ['']
      })
    }
  EditContact(){
    const contact :Contact ={
      id: Number(this.ContactForm.value.id),
      firstName: this.ContactForm.value.firstName,
      lastName: this.ContactForm.value.lastName,
      street: this.ContactForm.value.street,
      city: this.ContactForm.value.city
    }
    this.ContactsModule.EditContact(contact);
    this.ContactForm.reset();
  
  }
}
