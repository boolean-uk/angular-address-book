import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})

export class EditComponent {
  contactForm: FormGroup;
  contactService = inject(ContactsService);

  route = inject(ActivatedRoute); // Route route = new Route
  id = this.route.snapshot.paramMap.get('id'); //get the id from the url/contact passed in
  contact: Contact | null = this.contactService.getContactById(Number(this.id)); //hitta contact från id

  router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required], //Validators.required = kräver att fältet är ifyllt
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.contactForm.patchValue({
      firstName: this.contact?.firstName,
      lastName: this.contact?.lastName,
      street: this.contact?.street,
      city: this.contact?.city,
    });
  }

  editContact() {
    this.contact = {
      id: Number(this.id),
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.editContact(this.contact);

    //navigera till /contacts efter edit
    this.router.navigate(['/contacts']);
  }
}
