import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactData, ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.css'
})
export class NewContactComponent {
  contactForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
  })

  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      this.contactService.addContact(this.contactForm.value as ContactData);
      this.contactForm.reset();
      this.formSubmitted = false;
    }
  }
}
