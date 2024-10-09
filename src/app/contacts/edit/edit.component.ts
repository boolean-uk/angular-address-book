import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  contactForm: FormGroup
  formBuilder = inject(FormBuilder)
  contactService = inject(ContactService)
  router = inject(Router)
  
  route = inject(ActivatedRoute)
  id = this.route.snapshot.paramMap.get('id')

  contact: Contact | null = this.contactService.getById(Number(this.id))

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstname: [this.contact?.firstname, Validators.required],
      lastname: [this.contact?.lastname, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required]
    })
  }

  updateContact() {
    this.contactService.updateContact({...this.contactForm.value, id: Number(this.id)})
    this.router.navigate(['contacts'])
  }

  

}
