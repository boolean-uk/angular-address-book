import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts-service.service';
@Component({
  selector: 'app-new-contact-page',
  templateUrl: './new-contact-page.component.html',
  styleUrls: ['./new-contact-page.component.css']
})


export class NewContactPageComponent implements OnInit{
  // @ts-ignore
  ContactsService: ContactsService;
  // @ts-ignore
  form: FormGroup
  constructor(private fb: FormBuilder, ContactsService: ContactsService) {
    this.ContactsService = ContactsService;
  }

  ngOnInit(): void {
    // if we wanted to edit an existing user:
    // retrieve user id from params
    // get user from service
    // assign the default form values based on user

    // note: each <input> field is represented by one of these:
      // FIELDNAME: 'default_value' 
      // FIELDNAME: ['default_value' single Validator]
      // FIELDNAME: ['default_value', [validators array]]
      
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', [Validators.required]],
      street: ['', Validators.required],
      city: ['', [Validators.required]],
    });
   }

    onSubmit() {
    this.ContactsService.createUser(
      this.form.value.firstname,
      this.form.value.lastname,
      this.form.value.street,
      this.form.value.city,

    );
  }
}