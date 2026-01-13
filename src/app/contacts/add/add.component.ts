import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from '../contacts-service';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm : FormGroup;
  constructor(
    private readonly formBuilder : FormBuilder,
    private readonly contactsService : ContactsService,
    private readonly router : Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  addContact() : void {
    const newContact : Contact = {
      id: this.contactsService.getLastId() + 1,
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      email: this.contactForm.value.email,
    };
    this.contactsService.AddContact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts'])
  }
}
