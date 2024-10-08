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
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactService);
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
  router = inject(Router);
  contact: Contact | null = this.contactService.getContactById(Number(this.id));

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      city: [this.contact?.city, Validators.required],
      street: [this.contact?.street, Validators.required],
    });
  }

  editContact() {
    this.contactService.editContact(this.contactForm.value, Number(this.id));
    this.router.navigate(['contacts'])
  }
}
