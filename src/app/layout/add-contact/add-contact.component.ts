import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact, ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    street: ['', [Validators.required]],
    city: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService
  ) {}

  submit() {
    this.contactsService.contacts.push(this.form.value as Contact)
    this.form.reset()
  }
}
