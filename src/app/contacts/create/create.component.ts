import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  contactForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder, 
    private readonly contactService: ContactService
    ) {
      this.contactForm = this.formbuilder.group({
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
          city: this.contactForm.value.city
        }
        this.contactService.addContact(newContact)
        this.contactForm.reset();
      }
    }
}
