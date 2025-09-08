import { Component, inject } from '@angular/core';
import { Contact } from '../models/contact';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contact: Contact | null = null;
  contactId: number | null = null;
  contactForm: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder)
  contactService: ContactService = inject(ContactService)
  router: Router = inject(Router)
  route: ActivatedRoute = inject(ActivatedRoute)

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.contactService.getContactById(this.contactId)
      if (this.contact !== null && this.contact !== undefined) {
        this.contactForm.patchValue({
          firstName: this.contact.firstName,
          lastName: this.contact.lastName,
          street: this.contact.street,
          city: this.contact.city 
        })
      }
    }

  editContact() {
    if (!this.contactId) return;

    const updatedContact: Contact = { 
      id: this.contactId,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city
    }
    this.contactService.editContact(updatedContact);
    this.contactForm.reset();
    this.router.navigate(['contacts'])
  }

}
