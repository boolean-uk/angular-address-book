import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressbookService } from 'src/app/services/addressbook.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(AddressbookService)
  router = inject(Router)

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required]
    });
  }

  addContact() {
    this.contactService.addContact(this.contactForm.value)
    this.router.navigate(['addressbook'])
  }
}
