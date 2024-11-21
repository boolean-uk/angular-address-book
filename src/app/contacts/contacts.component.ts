import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact, CreatedContactsService } from '../created-contacts.service';
import { whiteSpacesValidator } from 'src/validators/whiteSpacesValidator';
import { emailValidator } from 'src/validators/emailValidator';

@Component({
  selector: 'app-root',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private createdContacts: CreatedContactsService
  ) {}

  userForm = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.minLength(3), whiteSpacesValidator],
    ],
    lastName: [
      '',
      [Validators.required, Validators.minLength(3), whiteSpacesValidator],
    ],
    street: ['', Validators.required],
    city: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/@boolean.co.uk$/)]],
  });

  ngOnInit(): void {}

  submit(event: Event) {
    this.createdContacts.addContact(
      new Contact(
        this.createdContacts.contacts.length + 1,
        this.userForm.controls.firstName.value,
        this.userForm.controls.lastName.value,
        this.userForm.controls.street.value,
        this.userForm.controls.city.value,
        this.userForm.controls.email.value
      )
    );
    this.userForm.reset();
  }
}
