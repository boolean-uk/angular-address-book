import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  route = inject(ActivatedRoute);
  contactService = inject(ContactService)
  router = inject(Router);
  contactForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  contact: Contact | null = this.contactService.getContactById(Number(this.id));

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: [this.contact?.firstname, Validators.required],
      lastname: [this.contact?.lastname, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required]
    });
  }

  updateContact() {
    this.contactService.updateContact({
      id: Number(this.id),
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city
    });
    this.router.navigate(['contacts']);
  }
}
