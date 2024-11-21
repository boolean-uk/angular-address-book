import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CONTACTS, Contact, ContactArray } from '../contacts';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent implements OnInit {
  // contactId: number = -1;
  contact: Contact | null = null;
  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  contactService: ContactsService;
  contacts: ContactArray = CONTACTS;
  absent: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    contactService: ContactsService
  ) {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  onSubmit() {
    var ans = this.contacts.some(
      (item) => item.id === parseInt(this.form.value.id)
    );

    if (ans) {
      this.absent = false;
    } else {
      this.absent = true;
    }
    this.contactService.updateContact(
      parseInt(this.form.value.id),
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.street,
      this.form.value.city
    );
  }
}
