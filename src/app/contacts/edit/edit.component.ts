import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  contactService = inject(ContactService);
  route = inject(ActivatedRoute);

  contactForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');
  contact = this.contactService.getContactById(Number(this.id));

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }

  editContact() {
    this.contact = {
      id: Number(this.contact?.id),
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.editContact(this.contact);
    }
  }
