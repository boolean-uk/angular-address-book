import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactForm: FormGroup;
  cservice: ContactsService;
  contactId!: number // | null = null;
  contact: Contact | null = null;
  

  constructor(
    private formBuilder: FormBuilder,
    private readonly contactsService: ContactsService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.cservice = this.contactsService;
    this.contactId = Number(route.snapshot.paramMap.get('id'))
    this.contact = this.contactsService.GetContactById(this.contactId);

    if (this.contact) {
      this.contactForm.patchValue({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        street: this.contact.street,
        city: this.contact.city,
      });
    }
  }

  editContact(): void {
    this.cservice.EditContact(this.contactId, this.contactForm.value);
    this.contactForm.reset();
    this.router.navigate(["contacts/", this.contactId])
  }
}
