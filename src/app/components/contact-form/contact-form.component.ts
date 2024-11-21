import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../models/contact.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  // Receives contact data
  @Input() contact: Contact | null = null;

  // Emits the form data to the parent component.
  @Output() submittedContact = new EventEmitter<Contact>();

  // Manages the form controls.
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    if (this.contact) {
      this.contactForm.patchValue(this.contact);
    }
  }

  
  createForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submittedContact.emit(this.contactForm.value);
    }
  }
}
