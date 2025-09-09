import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ContactsService} from "../contacts.service";
import {Router} from "@angular/router";
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  private router = inject(Router);
  private readonly contactService: ContactsService;
  public contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private readonly service: ContactsService
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.contactService = service;
  }
  cancel(): void {
    this.router.navigate(['/contacts']);
  }
  addContact(): void {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };

      this.contactService.addContact(newContact).subscribe({
        next: (response) => {
          console.log('Contact added successfully:', response);
          this.contactForm.reset();
          this.router.navigate(['/contacts']);
        },
        error: (err) => {
          console.error('Failed to add contact:', err);
        },
      });
    }
  }
}

