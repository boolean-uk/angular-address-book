import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Contact, ContactsService } from 'src/app/services/contacts.service';
import { NameValidator } from './name-validator';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), NameValidator.cannotContainSpace]],
    lastName: ['', [Validators.required, Validators.minLength(3), NameValidator.cannotContainSpace]],
    street: ['', [Validators.required]],
    city: ['', [Validators.required]]
  })

  constructor(
    private fb: NonNullableFormBuilder,
    private contactsService: ContactsService
  ) {}

  submit() {
    this.contactsService.contacts.push(this.form.value as Contact)
    this.form.reset()
    console.log(this.form.value)
  }
}
