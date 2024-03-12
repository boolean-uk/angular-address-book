import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { AddressbookService } from '../addressbook.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly addressBookService: AddressbookService
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: [''],
      city: ['']
    });
  }
  
  addContact(){
    if(this.contactForm.valid) {
      const newContact: Contact = {
        id: 0,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city
      };
      this.addressBookService.AddContact(newContact);
      this.contactForm.reset();
    }
  }
}
