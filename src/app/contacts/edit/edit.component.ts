import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  contactEditForm: FormGroup;
  contactService = inject(ContactsService);

  route = inject(ActivatedRoute);
  router = inject(Router);

  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id));

  constructor(private formBuilder: FormBuilder) {
    this.contactEditForm = this.formBuilder.group({
      id: this.id,
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }

  updateContact() {
    const updateContact: Contact = {
      id: this.contact?.id ?? 0,
      firstName: this.contactEditForm.value.firstName,
      lastName: this.contactEditForm.value.lastName,
      street: this.contactEditForm.value.street,
      city: this.contactEditForm.value.city,
    };
    this.contactService.updateTheContact(updateContact);
    this.router.navigate(['contacts']);
  }
}
