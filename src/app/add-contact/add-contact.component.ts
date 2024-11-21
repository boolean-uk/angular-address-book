import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../contacts/contacts.service';
import { Contact } from '../contacts/model';

@Component({
  standalone: true,
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
  imports: [ReactiveFormsModule]
})
export class AddContactComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private readonly contactService: ContactsService 
  ){
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  addContact() {
    if(this.contactForm.valid){
      const newContact: Contact = {
        id: 0,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      }
      this.contactService.addContact(newContact);
      this.contactForm.reset();
    }
  }
}