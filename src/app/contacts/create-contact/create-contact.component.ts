import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  //@ts-ignore
  form: FormGroup;
  //@ts-ignore
  contactService: ContactsService;
  // add contact service
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
    //without form builder
    /*this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
    });*/
  }

  onSubmit() {
    console.log('Valid?', this.form.valid);
    console.log('firstName', this.form.value.firstName);
    console.log('lastName', this.form.value.lastName);
    console.log('street', this.form.value.street);
    console.log('city', this.form.value.city);

    //contact create contact in contact services

    this.contactService.createContact(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.street,
      this.form.value.city
    );
  }
}
