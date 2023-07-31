import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService, Contact } from "../contact.service";
@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent {
  contactForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,
              private _contactService: ContactService,
              private _router: Router) {
    this.contactForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    })
  }
  onSubmit() {
    if(!this.contactForm.valid) {
      alert('Fill all inputs')
      return;
    }

    const newContact: Contact = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    }

    this._contactService.addContact(newContact)
    this._router.navigate(['/contact/list'])
  }
}
