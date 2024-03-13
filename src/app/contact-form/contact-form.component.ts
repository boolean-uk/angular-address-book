import { Component, Optional, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/ContactService';
import { Contact } from 'src/model/ContactInfo';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup
  contactService: ContactService = inject(ContactService)
  router: Router = inject(Router)
  route: ActivatedRoute = inject(ActivatedRoute)
  
  uuidToEdit: String | null = this.route.snapshot.paramMap.get('uuid')
  contactToEdit: Contact | undefined = this.contactService.getContactByID(this.uuidToEdit)

  isEditMode: Boolean = this.contactToEdit !== undefined

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contactToEdit?.firstName, Validators.required],
      lastName: [this.contactToEdit?.lastName, Validators.required],
      city: [this.contactToEdit?.city, Validators.required],
      street: [this.contactToEdit?.street, Validators.required]
    })
  }

  pruneContact(e: Event) {
    e.preventDefault()

    const _targetedContact: Contact = {
      uuid: this.contactToEdit?.uuid || crypto.randomUUID(),
      ...this.contactForm.value
    }

    if (this.isEditMode)
      this.contactService.updateContact(_targetedContact)
    else
      this.contactService.addContact(_targetedContact)
    this.router.navigate([ "home" ])
  }
}
