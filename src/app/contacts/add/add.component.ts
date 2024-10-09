import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;
  contactService: ContactsService;
  constructor(
    private formBuilder: FormBuilder,
    private readonly cService: ContactsService
  ){
    this.contactForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required]
    });
    this.contactService = cService;
  }

  addContact(){
    const newContact: Contact = {
      id: 0, 
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city
    };
    this.contactService.AddContact(newContact);
    this.contactForm.reset();
  }
}
