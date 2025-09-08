import { Component, inject, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Contact } from '../models/contact';
import { CONTACTS } from '../data/contacts';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact-service';

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
  contactService = inject(ContactService);
  router = inject(Router);

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addContact() {
    this.contactService.addContact(this.contactForm.value as Contact);
    this.router.navigate(['contacts'])
  }
}

