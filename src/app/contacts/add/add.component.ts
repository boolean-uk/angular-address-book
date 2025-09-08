import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactsService: ContactsService,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addContact() {
    const newContact: Contact = {
      id: 0,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactsService.AddContact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}


