import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/contacts.service';
import { CONTACTS, Contact } from '../contacts';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  contactService: ContactsService;
  contacts: Contact[] = CONTACTS;

  constructor(private fb: FormBuilder, contactService: ContactsService) {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  onSubmit() {
    this.contactService.createContact(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.street,
      this.form.value.city
    );
  }
}
