import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  contactsService: ContactsService;
  constructor(
    contactsService: ContactsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.contactsService = contactsService;
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  onSubmit() {
    // log the newly added contact to console
    console.log('Valid?', this.form.valid);
    console.log('firstName', this.form.value.firstName);
    console.log('lastName', this.form.value.lastName);
    console.log('street', this.form.value.street);
    console.log('city', this.form.value.city);

    // call createContact(from contacts.service) with form data
    this.contactsService.createContact(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.street,
      this.form.value.city
    );
    this.router.navigate(['/contacts']);
  }
}
