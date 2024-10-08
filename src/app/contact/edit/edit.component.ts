import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactsService = inject(ContactsService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  id = this.activeRoute.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactsService.getContactById(
    Number(this.id)
  );

  constructor() {
    this.contactForm = this.formBuilder.group({
      id: [this.contact?.id],
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      city: [this.contact?.city, Validators.required],
      street: [this.contact?.street, Validators.required],
    });
  }

  updateContact(): void {
    if (this.contactForm.valid) {
      this.contactsService.updateContact(this.contactForm.value);
      this.router.navigate(['']);
    }
  }
}
