import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent {
  contactForm: FormGroup
  formBuilder = inject(FormBuilder)
  contactService = inject(ContactServiceService)
  router = inject(Router)

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      email: ["", Validators.required],
    })
  }

  addContact() {
    this.contactService.addContact(this.contactForm.value)
    this.router.navigate(['contacts'])
  }
}