import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../model/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  route = inject(ActivatedRoute)
  contactService = inject(ContactsService)

  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.contactService.getContactById(Number(this.id))

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  editContact() {
    const originalValues = this.contactService.getContactById(Number(this.id))

    const myContact = {
      id: Number(this.id),
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city
    }
    const index = this.contactService.contacts.findIndex((c) => c.id === Number(this.id))
    if(index !== -1) {
      this.contactService.contacts[index] = myContact
    }
  }
}
