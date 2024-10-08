import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  contactService = inject(ContactService);

  route = inject(ActivatedRoute);
  router = inject(Router);

  contactForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  

  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.contactService.getContactById(Number(this.id))
  errorMessage: string = ''; 

  constructor() {
    if (!this.contact) {
      this.errorMessage = 'Contact not found.';
    } else {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }
  }

  editContact() {  
    if (this.contact) {
      const updatedContact: Contact = {
        id: this.contact.id, // Use the existing contact id
        ...this.contactForm.value
      };
      this.contactService.editContact(updatedContact);
      this.router.navigate(['contacts']);
    }
  }

}
