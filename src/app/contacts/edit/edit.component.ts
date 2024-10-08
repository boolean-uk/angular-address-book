import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactForm: FormGroup;
  contact: Contact | null = null;
  service: ContactsService;

  constructor(
    private formBuilder: FormBuilder,
    private readonly cService: ContactsService,
    private readonly route: ActivatedRoute
  ) {
    this.contact = this.cService.GetById(
      Number(route.snapshot.paramMap.get('id'))
    );
      this.contactForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
      });

      if (this.contact !== null) {
        this.contactForm = this.formBuilder.group({
          firstName: this.contact.firstName,
          lastName: this.contact.lastName,
          street: this.contact.street,
          city: this.contact.city,
        });
      }
      this.service = this.cService;
  }

  updateContact(): void {
    const newContact: Contact = {
      id: this.contact!.id,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city
    };
    this.service.Update(newContact);
  }
}
