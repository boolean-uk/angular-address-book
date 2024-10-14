import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html'
})
export class AddContactComponent {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  addContact() {
    if (this.contactForm.valid) {
      this.contactService.addContact(this.contactForm.value);
      this.router.navigate(['/contacts']);
    }
  }
}
