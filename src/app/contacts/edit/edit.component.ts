import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  route = inject(ActivatedRoute);
  cservice = inject(ContactsService);
  id = Number(this.route.snapshot.paramMap.get('id'));
  contact = this.cservice.GetContactById(this.id)!;

  contactForm: FormGroup;
  router = inject(Router);

  constructor(private builder: FormBuilder) {
    this.contactForm = this.builder.group({
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      city: [this.contact.city, Validators.required],
      street: [this.contact.street, Validators.required],
    });
  }

  updateContact(event: Event) {
    event.preventDefault();
    if (!this.contactForm.valid) {
      console.error('invalid form');
      return;
    }

    this.cservice.UpdateContact(this.id, {
      id: 0,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      city: this.contactForm.value.city,
      street: this.contactForm.value.street,
    });
    this.router.navigate(['/contacts/']);
  }
}
