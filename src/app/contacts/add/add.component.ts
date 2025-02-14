import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../../models/contact';
import { Router } from '@angular/router';
import { group } from '@angular/animations';
import { CONTACTS } from 'src/app/data/contacts';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactSerivce: ContactsService,
    private readonly router: Router) {

      this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      });
    }

    addContact() : void {
      const newContact: Contact = {
        id: CONTACTS.length + 1,
        firstname: this.contactForm.value.firstname,
        lastname: this.contactForm.value.lastname,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };

      this.contactSerivce.AddContact(newContact);
      this.contactForm.reset();
      this.router.navigate(['/contacts']);
    }

  }
