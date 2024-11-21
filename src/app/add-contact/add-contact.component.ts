import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {emailValidator, noSpaceValidator} from "./contactValidators";
import {ContactService} from "../Contact/contact.service";
import {Contact} from "../Contact/contact";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  userForm = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.minLength(3), noSpaceValidator],
    ],
    surname: [
      '',
      [Validators.required, Validators.minLength(3), noSpaceValidator],
    ],
    street: [
      '',
      [Validators.required],
    ],
    city: [
      '',
      [Validators.required],
    ],
    email: [
      '',
      [Validators.required, emailValidator],
    ],


  });

  ngOnInit(): void {}

  submit(event: Event) {
    console.log('form submitted', this.userForm);
    if (this.userForm.valid) {
      const firstName = this.userForm.get('firstName')?.value;
      const surname = this.userForm.get('surname')?.value;
      const street = this.userForm.get('street')?.value;
      const city = this.userForm.get('city')?.value;
      const email = this.userForm.get('email')?.value;

      if (firstName && surname && street && city && email) {
        const newContact: Contact = {
          firstName,
          lastName: surname,
          street,
          city,
          email,
          id: -1,
        };
        this.contactService.addContact(newContact);
      }

      this.userForm.reset();
    }
  }
}
