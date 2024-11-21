import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  form!: FormGroup;
  contactService: ContactsService;
  contactID: any;
  contactFound: any;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    contactService: ContactsService,
    private router: Router
  )
  {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      ID: [Validators.required]
    });
  }

  onSubmit() {
    this.contactID = this.form.value.ID;

    this.formSubmitted = true;
    this.contactFound = this.contactService.getContact(this.contactID);
  }

}
