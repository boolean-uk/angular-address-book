import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { emailValidator, noSpacesValidator } from './formValidators';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.minLength(3), noSpacesValidator],
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(3), noSpacesValidator],
      ],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, emailValidator]],
    });
  }
  addContact() {
    this.contactsService.setData(this.contactForm.value);
    this.contactForm.reset();
    console.log(this.contactsService.getData());
  }
}
