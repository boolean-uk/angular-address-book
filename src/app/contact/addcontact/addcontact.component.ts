import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { Contact } from 'src/interface/contact';

let nextId = 3;

@Component({
  selector: 'app-addcontact',
  standalone: false,
  templateUrl: './addcontact.component.html',
  styleUrl: './addcontact.component.css'
})

export class AddComponent {
  contactForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  AddContact(): void {
    const newContact: Contact = {
      id: nextId++,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.AddContact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}