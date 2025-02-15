import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsModule } from '../contacts.module';
import { Contact } from 'src/app/types';


@Component({
  selector: 'app-add-contact',
  standalone: false,
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
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

  AddContact():void{  
    const newContact :Contact ={
      firstName: this.ContactForm.value.firstName,
      lastName: this.ContactForm.value.lastName,
      street: this.ContactForm.value.street,
      city: this.ContactForm.value.city
    }
    this.ContactsModule.AddContact(newContact);
    this.ContactForm.reset();

  }
}
