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
      name: ['', Validators.required],
      phoneNr: ['', Validators.required],
    });
  }
  onSubmit() {
    // log the newly added contact to console
    console.log('Valid?', this.form.valid);
    console.log('Name', this.form.value.name);
    console.log('phoneNr', this.form.value.phoneNr);

    // call createContact(from contacts.service) with form data
    this.contactsService.createContact(
      this.form.value.name,
      this.form.value.phoneNr
    );
    this.router.navigate(['/contacts']);
  }
}
