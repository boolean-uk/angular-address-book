import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactsService: ContactsService = inject(ContactsService);
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router)

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    })
  }

  addContact(): void {
    this.contactsService.addContact(this.contactForm.value);
    this.router.navigate(['contacts'])
  }
}
