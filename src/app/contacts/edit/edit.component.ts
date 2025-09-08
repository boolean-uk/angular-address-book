import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactService = inject(ContactService)
  route = inject(ActivatedRoute)
  
  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.contactService.getContactById(Number(this.id))

  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router)

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    })
  }

  editContact() {
    const editedContact = this.contactForm.value
    this.contactService.editContact({ ...editedContact, id: this.contact?.id })
    this.router.navigate([`contacts/${this.contact?.id}`])
  }
}
