import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  contactForm: FormGroup;
  contactService = inject(ContactService)
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.contactService.getContactById(Number(this.id))
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group(
      {
        firstName: [this.contact?.firstName , Validators.required],
        lastName: [this.contact?.lastName, Validators.required],
        city: [this.contact?.city, Validators.required],
        street: [this.contact?.street, Validators.required]
      }
    );
  }
  editContact(){
    const updatedContact = {
      id: this.contact!.id,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      city: this.contactForm.value.city,
      street: this.contactForm.value.street
    }

    console.log(this.contact, updatedContact)
    this.contactService.updateContact(updatedContact)
  }

}
