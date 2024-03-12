import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AddressbookService } from 'src/app/services/addressbook.service';

@Component({
  selector: 'app-contact-form-view',
  templateUrl: './contact-form-view.component.html',
  styleUrls: ['./contact-form-view.component.css'],
})
export class ContactFormViewComponent implements OnInit {
  // @ts-ignore
  public form!: FormGroup; // this property stores the fields for the form

  // inject the form builder that helps us concisely define the form
  constructor(
    private fb: FormBuilder,
    private addressbookService: AddressbookService,
    private router: Router
  ) {}

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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });

    this.form.valueChanges.subscribe((values) => {
      console.log('Form values updated:', values);
    });
  }

  onSubmit() {
    console.log('Valid?', this.form.valid); // true or false
    console.log('firstName', this.form.value.firstName);
    console.log('lastName', this.form.value.lastName);
    console.log('street', this.form.value.street);
    console.log('city', this.form.value.city);

    const id = this.addressbookService.people.length + 1;
    const firstName = this.form.value.firstName;
    const lastName = this.form.value.lastName;
    const street = this.form.value.street;
    const city = this.form.value.city;
    // create user
    this.addressbookService.addUser(id, firstName, lastName, street, city);
    this.router.navigate(['addressbook']);
    // redirect or clear form...
  }
}
