import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from 'src/app/models/contacts';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
 

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactForm: FormGroup;
  cservice: ContactsService;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
    });
    this.cservice = this.contactService;
  }

  editContact(): void {
    const newContact: Contact = {
      id: 0,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      city: this.contactForm.value.city,
      street: this.contactForm.value.street,
    };
    this.cservice.AddContact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}
