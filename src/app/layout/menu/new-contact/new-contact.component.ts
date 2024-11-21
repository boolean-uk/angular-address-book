import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit{
  // @ts-ignore
  form: FormGroup;
  contactsService: ContactsService
  
  constructor(contactsService: ContactsService, private formBuilder: FormBuilder) 
  {
    this.contactsService = contactsService
  }

  ngOnInit(): void
  {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required]
      }
    )
  }

  onSubmit(): void
  {
    if (!this.form.valid)
      return

    this.contactsService.addContact(this.form.value.firstName, this.form.value.lastName,
      this.form.value.street, this.form.value.city)
  }
}
