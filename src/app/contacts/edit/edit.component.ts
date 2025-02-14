import { Component, inject } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
    router = inject(Router)
    route = inject(ActivatedRoute);

    id = Number(this.route.snapshot.paramMap.get("id"));
    contact: Contact | null = this.contactService.getCarById(Number(this.id));
  
    constructor() {
      this.contactForm = this.formBuilder.group({
        id: [this.id, Validators.required],
        firstName: [this.contact?.firstName, Validators.required],
        lastName: [this.contact?.lastName, Validators.required],
        street: [this.contact?.street, Validators.required],
        city: [this.contact?.city, Validators.required],
      });
    }

    editContact() {
      this.contactService.editContact(this.contactForm.value);
      this.router.navigate(["/contacts/"+this.id])
    }
}
