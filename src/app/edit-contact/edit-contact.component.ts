import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent {
  contactForm: FormGroup;
  contactService = inject(ContactService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null | undefined  = this.contactService.getContactById(Number(this.id));

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.contactForm.patchValue({
      name: this.contact?.name,
      street: this.contact?.street,
      city: this.contact?.city,
    });
  }

  editContact() {
    this.contact = {
      id: Number(this.id),
      name: this.contactForm.value.name,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.editContact(this.contact); // Ensure you have an updateContact method in your service
    this.router.navigate(['/contacts']);
  }
}
