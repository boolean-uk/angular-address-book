import { Component, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ContactsService } from '../../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactsService); 
  router = inject(Router);

  constructor() {
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  addContact() {
    this.contactService.addContact(this.contactForm.value);
    this.router.navigate(['contacts']);
  }
}
