import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contacts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: '',
      street: '',
    })
  }

  addContact() {
    if (this.contactForm.invalid)
      return
    else
      this.contactService.addContact(
        this.contactForm.value.firstName,
        this.contactForm.value.lastName,
        this.contactForm.value.city,
        this.contactForm.value.street
      );

    this.contactForm.reset();
  }
}
